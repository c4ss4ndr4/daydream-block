import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, PanelBody, SelectControl, ToggleControl } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
  const { format, showTime, timeFormat, alignment, fontSize } = attributes;
  
  // Get current date for preview
  const currentDate = new Date();

  const blockProps = useBlockProps({
    className: `dd-date-display has-text-align-${alignment} has-${fontSize}-font-size`,
    style: { textAlign: alignment }
  });

  const formatOptions = [
    { label: __('Full date (January 1, 2024)', 'daydream'), value: 'F j, Y' },
    { label: __('Short date (01/01/2024)', 'daydream'), value: 'm/d/Y' },
    { label: __('ISO date (2024-01-01)', 'daydream'), value: 'Y-m-d' },
    { label: __('Day and month (January 1)', 'daydream'), value: 'F j' },
    { label: __('Custom format', 'daydream'), value: 'custom' }
  ];

  const timeFormatOptions = [
    { label: __('12-hour (1:30 PM)', 'daydream'), value: 'g:i a' },
    { label: __('24-hour (13:30)', 'daydream'), value: 'H:i' },
    { label: __('12-hour with seconds (1:30:45 PM)', 'daydream'), value: 'g:i:s a' },
    { label: __('24-hour with seconds (13:30:45)', 'daydream'), value: 'H:i:s' }
  ];

  const renderPreview = () => {
    const dateStr = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: format.includes('F') ? 'long' : 'numeric',
      day: 'numeric'
    });

    const timeStr = showTime ? currentDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: timeFormat.includes('a')
    }) : '';

    return (
      <time dateTime={currentDate.toISOString()}>
        {dateStr}{showTime && ` ${timeStr}`}
      </time>
    );
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Date Settings', 'daydream')} initialOpen={true}>
          <SelectControl
            label={__('Date Format', 'daydream')}
            value={format}
            options={formatOptions}
            onChange={(value) => setAttributes({ format: value })}
          />
          
          <ToggleControl
            label={__('Show Time', 'daydream')}
            checked={showTime}
            onChange={(value) => setAttributes({ showTime: value })}
          />
          
          {showTime && (
            <SelectControl
              label={__('Time Format', 'daydream')}
              value={timeFormat}
              options={timeFormatOptions}
              onChange={(value) => setAttributes({ timeFormat: value })}
            />
          )}
        </PanelBody>
      </InspectorControls>
      
      <div {...blockProps}>
        {renderPreview()}
      </div>
    </>
  );
} 