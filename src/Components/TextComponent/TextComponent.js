import React from 'react'

 const TextComponent = (props) =>{
     const { text} = props;
    return (
        <div>
          {text}
        </div>
    )
}


export default TextComponent