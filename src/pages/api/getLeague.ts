import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const resData = await fetch(`https://www.fleaflicker.com/api/FetchTrades?sport=NFL&league_id=${req.query.id}&filter=TRADES_COMPLETED&result_offset=0`).then(response => {
    return response.text()
    
  }).then(resText => {
    return JSON.parse(resText)
  })
  res.status(200).json(resData)

}
// https://www.fleaflicker.com/api/FetchTrades?sport=NFL&league_id=243624&filter=TRADES_COMPLETED&result_offset=0