import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { title, message, accent, customHeadingColor, customTextColor, customBackgroundColor } = attributes;
  const blockProps = useBlockProps.save({
    className: 'dd-notice',
    style: { 
      borderLeft: `4px solid ${accent}`,
      backgroundColor: customBackgroundColor
    }
  });

  return (
    <div {...blockProps}>
      {title && <RichText.Content tagName="h3" value={title} style={{ color: customHeadingColor }} />}
      {message && <RichText.Content tagName="p" value={message} style={{ color: customTextColor }} />}
    </div>
  );
}

