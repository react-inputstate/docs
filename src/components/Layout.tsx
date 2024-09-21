import Typography from './Typography'
import { ReactNode } from 'react'

export namespace Layout {
  export function Stack({
    gap,
    center,
    children,
  }: {
    gap?: number
    center?: boolean
    children: ReactNode
  }) {
    return (
      <div
        style={{
          display: 'flex',
          gap,
          alignItems: center ? 'center' : undefined,
        }}
      >
        {children}
      </div>
    )
  }

  export function VStack({
    gap,
    children,
  }: {
    gap?: number
    children: ReactNode
  }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap }}>
        {children}
      </div>
    )
  }

  export function Module({ children }: { children: ReactNode }) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          maxWidth: 660,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 16,
          marginBottom: 16,
          padding: 16,
          borderRadius: 8,
          background: '#eaeaea',
          boxShadow: '0px 4px 8px 1px rgba(0,0,0,0.2)',
        }}
      >
        {children}
      </div>
    )
  }

  export function Section({
    title,
    description,
    badge,
    children,
  }: {
    title: string
    description?: string
    badge?: ReactNode
    children: ReactNode
  }) {
    return (
      <VStack gap={8}>
        <VStack gap={4}>
          <Stack gap={8}>
            <Typography variant="title">{title}</Typography>
            {badge}
          </Stack>
          {description && <Typography>{description}</Typography>}
        </VStack>
        {children}
      </VStack>
    )
  }
}
