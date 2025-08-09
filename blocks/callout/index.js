import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.css';
registerBlockType('daydream/callout', { edit: Edit, save });

import './style.scss';
import './js/index.js';
import '../blocks/callout'; // <-- registers block
