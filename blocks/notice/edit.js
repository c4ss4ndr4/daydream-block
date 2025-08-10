import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

function Edit({ attributes, setAttributes }) {
  const { title, message, accent, customHeadingColor, customTextColor, customBackgroundColor } = attributes;
  
  const blockProps = useBlockProps({
    className: 'dd-notice',
    style: { 
      borderLeft: `4px solid ${accent}`,
      backgroundColor: customBackgroundColor
    }
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Notice Settings', 'daydream')}>
          <PanelColorSettings
            colorSettings={[
              {
                label: __('Accent Color', 'daydream'),
                value: accent,
                onChange: (c) => setAttributes({ accent: c || '#4f7cff' })
              },
              {
                label: __('Heading Color', 'daydream'),
                value: customHeadingColor,
                onChange: (c) => setAttributes({ customHeadingColor: c })
              },
              {
                label: __('Text Color', 'daydream'),
                value: customTextColor,
                onChange: (c) => setAttributes({ customTextColor: c })
              },
              {
                label: __('Background Color', 'daydream'),
                value: customBackgroundColor,
                onChange: (c) => setAttributes({ customBackgroundColor: c })
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      
      <div {...blockProps}>
        <RichText 
          tagName="h3" 
          value={title} 
          placeholder={__('Notice title…', 'daydream')}
          allowedFormats={['core/bold', 'core/italic']}
          onChange={(v) => setAttributes({ title: v })}
          style={{ color: customHeadingColor }}
        />
        <RichText 
          tagName="p" 
          value={message} 
          placeholder={__('Write your notice message…', 'daydream')}
          allowedFormats={['core/bold', 'core/italic', 'core/link']}
          onChange={(v) => setAttributes({ message: v })}
          style={{ color: customTextColor }}
        />
      </div>
    </>
  );
}

export default Edit;

