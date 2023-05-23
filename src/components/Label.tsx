import { FC, ReactNode, useCallback, useEffect } from 'react'

export interface LabelProps {
  children?: ReactNode
  id: number
  node_id: string
  url: string
  name: string
  description: string | null
  color: string
  default: boolean
}

export const Label: FC<LabelProps> = (props) => {
  const { children, name } = props

  const init = useCallback(async () => {
    if (name.includes('area')) {
      // const { data: issues } = await octokit.rest.issues.listForRepo({
      //   owner: 'vercel',
      //   repo: 'next.js',
      //   labels: name,
      //   state: 'all',
      //   per_page: 200,
      // })
      // console.log(
      //   'issues',
      //   issues.map((item) => item.created_at)
      // )
      // setIssueAmount(issues.length)
    }
  }, [name])

  useEffect(() => {
    init()
  }, [init, name])

  return (
    <div style={{ padding: 8, cursor: 'pointer' }}>
      {name} {children}
    </div>
  )
}
