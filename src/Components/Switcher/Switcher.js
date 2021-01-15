/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Button, Form } from 'react-bootstrap';
import './Switcher.scss';

const modes = ['out-in', 'in-out'];

export default function Switcher() {
  const [mode, setMode] = useState('out-in');
  const [state, setState] = useState(true);

  const btnLabel = state ? 'Hello, world!' : 'Goodbye, world!';

  useEffect(
    () => {
      console.log('use effect', mode);
      return () => {
        console.log('useEffect  return');
      };
    },
    [mode],
  );

  return (
    <>
      <div className="label">Mode:</div>
      <div className="modes">
        {modes.map((m) => (
          <Form.Check
            key={m}
            custom
            inline
            label={m}
            id={`mode=msContentScript${m}`}
            type="radio"
            name="mode"
            checked={mode === m}
            value={m}
            onChange={(event) => {
              setMode(event.target.value);
            }}
          />
        ))}
      </div>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={btnLabel}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames="fade"
            // onExit={() => console.log('onExit event')}
          >
            <div className="button-container">
              <Button onClick={() => setState((a) => !a)}>
                {btnLabel}
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
