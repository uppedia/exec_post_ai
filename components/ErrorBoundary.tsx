"use client";
import React from "react";

type Props = { children: React.ReactNode };

type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("❌ Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-10 text-red-600 text-center">⚠️ Something went wrong. Please refresh.</div>;
    }

    return this.props.children;
  }
}
