import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('Render App', () => {
  it('should render App', async () => {
    const { findByText } = render(<App />)
    expect(await findByText('COVID19 Information')).toBeInTheDocument()
  })

  it('should render worldwide statistics', async () => {
    const { findByText } = render(<App />)
    expect(await findByText('Hide Worldwide Summary')).toBeInTheDocument()
    expect(await findByText('Country')).toBeInTheDocument()
    expect(await findByText('New Cases')).toBeInTheDocument()
    expect(await findByText('New Deaths')).toBeInTheDocument()
    expect(await findByText('Total Deaths')).toBeInTheDocument()
    expect(await findByText('New Recovered')).toBeInTheDocument()
    expect(await findByText('Total Recovered')).toBeInTheDocument()
  })

  it('should hide worldwide statistics when clicks on Hide Worldwide Summary', async () => {
    const { findByText, queryByText } = render(<App />)

    const toggleButton = await findByText('Hide Worldwide Summary')
    fireEvent.click(toggleButton)
    expect(await findByText('Show Worldwide Summary')).toBeInTheDocument()
    expect(queryByText('Country')).not.toBeInTheDocument()
    expect(queryByText('New Cases')).not.toBeInTheDocument()
    expect(queryByText('New Deaths')).not.toBeInTheDocument()
    expect(queryByText('Total Deaths')).not.toBeInTheDocument()
    expect(queryByText('New Recovered')).not.toBeInTheDocument()
    expect(queryByText('Total Recovered')).not.toBeInTheDocument()
  })
})