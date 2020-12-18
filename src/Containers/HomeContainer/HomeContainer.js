/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { MainLayout, RestorantCategories, Restaurants } from 'Components';
import { api } from 'Utils/apiHelpers';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      activeCategory: { name: '' },
      listContent: [],
      selected: [],
      compare: [],
    };
  }

  componentDidMount() {
    api().get('categories').then((response) => {
      this.setState({ categories: response.data.categories });
    }).catch((error) => {
      console.error(error);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: ');
    const { activeCategory } = this.state;

    if (prevState.activeCategory.name !== activeCategory.name) {
      api().get(`search?category=${activeCategory.name}$q=${activeCategory.name.slice(0, 2)}`).then((response) => {
        this.setState({ listContent: response.data.restaurants });
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  onCategoryChoose = (category) => {
    console.log('category: ', category);
    this.setState({ activeCategory: category.categories });
  }

  onSelectRestaurant = (id) => {
    const { selected } = this.state;

    if (selected.includes(id)) {
      selected.splice(selected.indexOf(id), 1);
      this.setState({ selected });
    } else {
      this.setState((prev) => ({
        selected: [...prev.selected, id],
      }));
    }
  }

  compareRestaurants = async () => {
    const { selected } = this.state;
    try {
      const res = await Promise.all([

        api().get(`restaurant?res_id=${selected[0]}`),
        api().get(`restaurant?res_id=${selected[1]}`),
      ]);
      console.log('res: ', res);
      this.setState({ compare: res });
    } catch (error) {
      console.error('error: ', error);
    }
  }

  render() {
    const {
      categories, activeCategory, listContent, selected,
    } = this.state;

    return (
      <MainLayout
        content={(
          <div>
            <Restaurants
              list={listContent}
              onSelect={this.onSelectRestaurant}
              selected={selected}
            />
          </div>
)}
        leftSidebar={(
          <div>
            <h4>Categories</h4>
            <RestorantCategories
              list={categories}
              onCategoryChoose={this.onCategoryChoose}
              active={activeCategory.name}
            />
            {selected.length === 2 && <button type="button" onClick={this.compareRestaurants}>Compare</button>}
          </div>
)}
      />
    );
  }
}

export default HomeContainer;
