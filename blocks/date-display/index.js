import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.css';

registerBlockType('daydream/date-display', { edit: Edit, save }); 