interface Props {
  variant?: 'label' | 'body' | 'title'
  children: string
}

export default function Typography({ variant = 'body', children }: Props) {
  return (
    <span
      style={
        variant === 'body'
          ? {
              fontSize: 14,
              lineHeight: '16px',
            }
          : variant === 'title'
            ? {
                fontSize: 20,
                lineHeight: '28px',
              }
            : variant === 'label'
              ? {
                  fontSize: 12,
                  lineHeight: '12px',
                }
              : undefined
      }
    >
      {children}
    </span>
  )
}
