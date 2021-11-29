import type { NextApiRequest, NextApiResponse } from 'next';

import { httpClient } from '@services/http/http.client';
import { PositionStack } from '@views/address/address.type';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data: response } = await httpClient<PositionStack>({
      baseURL: 'http://api.positionstack.com/v1/',
      endpoint: 'forward',
      params: {
        access_key: process.env.POSITIONSTACK_KEY,
        query: `${req.body.number} ${req.body.street}, ${req.body.city}, ${req.body.zip}`,
        country: 'BRA',
      },
    });
    res.status(200).json(response.data[0]);
  } catch (_) {
    res.status(422);
  }
}
