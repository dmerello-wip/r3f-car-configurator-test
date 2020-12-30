import React from 'react'
import ClassNames from 'classnames';

export default function Loading({type}) {

  let classes = ClassNames('c-loader', {
    'c-loader--full' : (type === 'full')
  });


  return <div className={classes} />;
}