import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.css';

registerBlockType('daydream/notice', { edit: Edit, save });
