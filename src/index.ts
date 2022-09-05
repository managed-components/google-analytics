import { ComponentSettings, Manager, MCEvent } from '@managed-components/types'
import { getEcommerceParams } from './ecommerce'
import { gaDoubleClick } from './gaDoubleClick'
import { getToolRequest } from './requestBuilder'

const BASE_URL = 'https://www.google-analytics.com/collect?'

const getFullURL = (requestPayload: any) => {
  const params = new URLSearchParams(requestPayload).toString()
  return BASE_URL + params
}

const sendGA3Event = function (
  eventType: string,
  event: MCEvent,
  settings: ComponentSettings
) {
  const requestPayload = getToolRequest(eventType, event, settings)

  let ecommerceParams = {}
  if (eventType === 'ecommerce') {
    ecommerceParams = getEcommerceParams(event)
  }

  const finalURL = getFullURL({ ...requestPayload, ...ecommerceParams })
  fetch(finalURL)

  if (settings['ga-audiences'] || settings['ga-doubleclick']) {
    gaDoubleClick(event, settings, finalURL)
  }
}

export default async function (manager: Manager, settings: ComponentSettings) {
  manager.addEventListener('event', event =>
    sendGA3Event('event', event, settings)
  )

  manager.addEventListener('pageview', event => {
    sendGA3Event('pageview', event, settings)
  })

  manager.addEventListener('ecommerce', event => {
    sendGA3Event('ecommerce', event, settings)
  })
}
