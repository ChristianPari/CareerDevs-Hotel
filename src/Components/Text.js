import React from 'react'

export default function Text(props) {
  const Tag = props.tag || 'p'

  return (
    <Tag
      id={props.id || ''}
      style={{...props.style }|| ''}
    >
      {props.text}
    </Tag>
  )
}