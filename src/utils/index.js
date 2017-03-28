export function safeGetAttribute (node, attributeName) {
  if (!node) return
  return node.getAttribute(attributeName) || ''
}
