/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
import { props_clean__tags__new } from '../props_clean/index.js'
import { van_ } from '../van/index.js'
export const H_ = be_(ctx=>{
	let van = van_(ctx)
	return van.props_clean ? van.tags : props_clean__tags__new(van.tags)
}, { id: 'H_' })
