import { FC, ReactNode, useEffect, useState } from 'react'
import { octokit } from '../pages/utils/octokit'
import { Label } from './Label'

export type Label = {
  id: number
  node_id: string
  url: string
  name: string
  description: string | null
  color: string
  default: boolean
}

export interface LabelsProps {
  children?: ReactNode
  onSelect: (label: Label) => void
}

export const Labels: FC<LabelsProps> = (props) => {
  const { children, onSelect } = props
  const [labels, setLabels] = useState<Label[]>([])

  useEffect(() => {
    octokit.rest.issues
      .listLabelsForRepo({
        owner: 'vercel',
        repo: 'next.js',
        per_page: 100,
      })
      .then((res) => {
        const issueLabels = res.data

        setLabels(issueLabels)
      })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {labels.map((label) => {
        return (
          <div onClick={() => onSelect(label)} style={{}} key={label.id}>
            <Label {...label} />
          </div>
        )
      })}
      {children}
    </div>
  )
}
