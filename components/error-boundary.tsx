"use client"

import type React from "react"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
  FallbackComponent?: React.ComponentType<{ error: Error; resetErrorBoundary: () => void }>
  onReset?: () => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public resetErrorBoundary = () => {
    this.props.onReset?.()
    this.setState({ hasError: false, error: null })
  }

  public render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.FallbackComponent) {
        return <this.props.FallbackComponent error={this.state.error} resetErrorBoundary={this.resetErrorBoundary} />
      }
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-400">Something went wrong loading the visualization.</div>
        </div>
      )
    }

    return this.props.children
  }
}

