import React from 'react';
import { FormLabel, Forms } from '@grafana/ui';

export const CustomAverage = props => (
  <div className="gf-form-inline">
    <div className="gf-form" style={{ width: '30px' } as React.CSSProperties}>
      <Forms.Checkbox value={props.use} onChange={() => props.onChange[0]()} tabIndex={0} />
    </div>
    <FormLabel
      width={11}
      tooltip="Allows defining a custom average period. If disabled, Grafana will automatically compute a suiting average period."
    >
      Average Period:
    </FormLabel>
    <div className="width-10" style={props.space}>
      <Forms.Input type="number" value={props.period} spellCheck={false} tabIndex={0} onChange={props.onChange[1]} disabled={!props.use} />
    </div>
    <div className="gf-form">
      <div tabIndex={0} style={props.space}>
        <Forms.Select<number> options={props.getUnits()} value={props.unit} onChange={props.onChange[2]} width={7} isSearchable={true} />
      </div>
    </div>
  </div>
);