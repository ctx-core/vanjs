/// <reference types="ctx-core" />
/// <reference types="van-type-delegate" />
/// <reference types="./index.d.ts" />
import { html__fragment_ } from '@ctx-core/dom'
import { van_internals_ } from '../van/index.js'
/**
 * @param {{ ctx:ctx_T }|ctx_T}props_OR_ctx
 * @param {string}html
 * @returns {DocumentFragment|PlateElement}
 * @constructor
 */
export function V_raw(props_OR_ctx, html) {
	if (globalThis['window']) return html__fragment_(html)
	const { elementProto } = van_internals_(props_OR_ctx)
	return {
		__proto__: elementProto,
		renderToBuf(buf) {
			buf.push(html)
		},
	}
}
