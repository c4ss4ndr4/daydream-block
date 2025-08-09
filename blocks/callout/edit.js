import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { title, message, accent } = attributes;
  const blockProps = useBlockProps({
    className: 'dd-callout',
    style: { borderLeft: `4px solid ${accent}` }
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Callout Settings', 'daydream')}>
          <PanelColorSettings
            colorSettings={[{
              label: __('Accent', 'daydream'),
              value: accent,
              onChange: (c)=> setAttributes({ accent: c || '#4f7cff' })
            }]}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <RichText tagName="h3" value={title} placeholder={__('Callout title…','daydream')}
          allowedFormats={['core/bold','core/italic']}
          onChange={(v)=> setAttributes({ title:v })} />
        <RichText tagName="p" value={message} placeholder={__('Write your message…','daydream')}
          allowedFormats={['core/bold','core/italic','core/link']}
          onChange={(v)=> setAttributes({ message:v })} />
      </div>
    </>
  );
}
