import React from 'react';
import NumberFormat from 'react-number-format';

interface RowProps {
    value : string|number;
    label : string;
    className? : string;
}
export default function Row(props : Partial<RowProps>) {
  const { value, label, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      { label }
      {' '}
      <span
        className={`purchase-details ${className}`}
      >
        {typeof value === 'number' ? (
          <NumberFormat
            value={value}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        ) : (
          value
        ) }
      </span>

    </p>
  );
}
