import { useBlockProps, RichText } from '@wordpress/block-editor';
export default function save({ attributes }) {
  const { title, message, accent } = attributes;
  const blockProps = useBlockProps.save({
    className: 'dd-callout',
    style: { borderLeft: `4px solid ${accent}` }
  });
  return (
    <div {...blockProps}>
      {title && <RichText.Content tagName="h3" value={title} />}
      {message && <RichText.Content tagName="p" value={message} />}
    </div>
  );
}
