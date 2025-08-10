import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { format, showTime, timeFormat, alignment, fontSize } = attributes;
  
  const blockProps = useBlockProps.save({
    className: `dd-date-display has-text-align-${alignment} has-${fontSize}-font-size`,
    style: { textAlign: alignment }
  });

  // Create the shortcode that will be processed by PHP
  const shortcode = showTime 
    ? `[current_date format="${format}" show_time="1" time_format="${timeFormat}"]`
    : `[current_date format="${format}"]`;

  return (
    <div {...blockProps}>
      {shortcode}
    </div>
  );
} 