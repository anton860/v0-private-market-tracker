"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts"
import {
  TrendingUp,
  DollarSign,
  PieChartIcon,
  BarChart3,
  Building2,
  Plus,
  Download,
  Settings,
  Calendar,
  Target,
  Activity,
  ArrowUpRight,
  Search,
  TrendingDown,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { InstructionsModal } from "@/components/instructions-modal"
import { LeadMagnetFooter } from "@/components/lead-magnet-footer"

const portfolioData = {
  totalInvested: 2500000,
  currentValuation: 4200000,
  irr: 24.5,
  moic: 1.68,
  dpi: 0.32,
  tvpi: 2.0,
  unrealizedGains: 1700000,
  realizedDistributions: 800000,
  totalDeals: 12,
  activeDeals: 9,
  exitedDeals: 3,
  averageHoldingPeriod: 2.3,
}

const sectorAllocation = [
  { name: "FinTech", value: 35, amount: 1470000, color: "#3B82F6", deals: 4 },
  { name: "HealthTech", value: 25, amount: 1050000, color: "#10B981", deals: 3 },
  { name: "SaaS", value: 20, amount: 840000, color: "#F59E0B", deals: 2 },
  { name: "E-commerce", value: 12, amount: 504000, color: "#EF4444", deals: 2 },
  { name: "AI/ML", value: 8, amount: 336000, color: "#8B5CF6", deals: 1 },
]

const stageAllocation = [
  { name: "Seed", value: 40, amount: 1680000, deals: 5 },
  { name: "Series A", value: 35, amount: 1470000, deals: 4 },
  { name: "Series B", value: 20, amount: 840000, deals: 2 },
  { name: "Growth", value: 5, amount: 210000, deals: 1 },
]

const geographicAllocation = [
  { name: "North America", value: 60, amount: 2520000, color: "#3B82F6" },
  { name: "Europe", value: 25, amount: 1050000, color: "#10B981" },
  { name: "Asia Pacific", value: 10, amount: 420000, color: "#F59E0B" },
  { name: "Other", value: 5, amount: 210000, color: "#EF4444" },
]

const performanceData = [
  { month: "Jan", value: 2500000, invested: 2500000, distributions: 0 },
  { month: "Feb", value: 2650000, invested: 2500000, distributions: 50000 },
  { month: "Mar", value: 2800000, invested: 2600000, distributions: 100000 },
  { month: "Apr", value: 3100000, invested: 2700000, distributions: 150000 },
  { month: "May", value: 3400000, invested: 2700000, distributions: 200000 },
  { month: "Jun", value: 3650000, invested: 2700000, distributions: 300000 },
  { month: "Jul", value: 3900000, invested: 2700000, distributions: 400000 },
  { month: "Aug", value: 4050000, invested: 2700000, distributions: 600000 },
  { month: "Sep", value: 4200000, invested: 2700000, distributions: 800000 },
]

const deals = [
  {
    id: 1,
    company: "TechFlow Solutions",
    sector: "FinTech",
    stage: "Series A",
    geography: "North America",
    invested: 500000,
    currentValue: 850000,
    ownership: 2.5,
    status: "Active",
    irr: 28.5,
    moic: 1.7,
    investmentDate: "2023-03-15",
    lastValuationDate: "2024-09-01",
    exitStatus: "Active",
    coInvestors: ["Sequoia Capital", "Andreessen Horowitz"],
    investmentType: "Equity",
    preMoneyValuation: 18000000,
    postMoneyValuation: 20000000,
    sharesHeld: 45000,
    securityType: "Series A Preferred",
    leadInvestor: "Sequoia Capital",
    boardSeat: true,
    liquidationPreference: "1x Non-Participating",
    antiDilution: "Weighted Average Broad",
    notes: "Strong revenue growth, expanding internationally",
    nextMilestone: "Series B fundraising Q1 2025",
    documents: ["SHA", "Certificate", "Board Consent"],
    unrealizedGain: 350000,
    distributionsReceived: 0,
  },
  {
    id: 2,
    company: "HealthSync",
    sector: "HealthTech",
    stage: "Seed",
    geography: "Europe",
    invested: 250000,
    currentValue: 420000,
    ownership: 5.2,
    status: "Active",
    irr: 32.1,
    moic: 1.68,
    investmentDate: "2023-01-20",
    lastValuationDate: "2024-08-15",
    exitStatus: "Active",
    coInvestors: ["Index Ventures", "Accel"],
    investmentType: "SAFE",
    preMoneyValuation: 4500000,
    postMoneyValuation: 5000000,
    valuationCap: 5000000,
    discount: 20,
    securityType: "SAFE",
    leadInvestor: "Index Ventures",
    boardSeat: false,
    liquidationPreference: "N/A",
    antiDilution: "N/A",
    notes: "FDA approval received, scaling operations",
    nextMilestone: "Series A fundraising Q2 2025",
    documents: ["SAFE Agreement", "Side Letter"],
    unrealizedGain: 170000,
    distributionsReceived: 0,
  },
  {
    id: 3,
    company: "DataVault Pro",
    sector: "SaaS",
    stage: "Series B",
    geography: "North America",
    invested: 750000,
    currentValue: 1200000,
    ownership: 1.8,
    status: "Active",
    irr: 22.3,
    moic: 1.6,
    investmentDate: "2022-11-10",
    lastValuationDate: "2024-07-30",
    exitStatus: "Active",
    coInvestors: ["General Catalyst", "Bessemer Venture Partners"],
    investmentType: "Equity",
    preMoneyValuation: 38000000,
    postMoneyValuation: 42000000,
    sharesHeld: 18750,
    securityType: "Series B Preferred",
    leadInvestor: "General Catalyst",
    boardSeat: false,
    liquidationPreference: "1x Non-Participating",
    antiDilution: "Weighted Average Narrow",
    notes: "Strong enterprise adoption, profitable",
    nextMilestone: "IPO preparation 2025",
    documents: ["SHA", "Certificate", "Investor Rights"],
    unrealizedGain: 450000,
    distributionsReceived: 0,
  },
  {
    id: 4,
    company: "EcoLogistics",
    sector: "E-commerce",
    stage: "Series A",
    geography: "Europe",
    invested: 400000,
    currentValue: 320000,
    ownership: 3.1,
    status: "Underperforming",
    irr: -8.2,
    moic: 0.8,
    investmentDate: "2022-08-15",
    lastValuationDate: "2024-06-30",
    exitStatus: "Active",
    coInvestors: ["Balderton Capital", "Northzone"],
    investmentType: "Equity",
    preMoneyValuation: 12000000,
    postMoneyValuation: 13000000,
    sharesHeld: 31000,
    securityType: "Series A Preferred",
    leadInvestor: "Balderton Capital",
    boardSeat: true,
    liquidationPreference: "1x Participating",
    antiDilution: "Weighted Average Broad",
    notes: "Market challenges, restructuring underway",
    nextMilestone: "Turnaround plan execution",
    documents: ["SHA", "Certificate", "Board Consent"],
    unrealizedGain: -80000,
    distributionsReceived: 0,
  },
  {
    id: 5,
    company: "AI Vision Labs",
    sector: "AI/ML",
    stage: "Seed",
    geography: "Asia Pacific",
    invested: 300000,
    currentValue: 650000,
    ownership: 4.8,
    status: "Active",
    irr: 45.2,
    moic: 2.17,
    investmentDate: "2023-06-10",
    lastValuationDate: "2024-09-15",
    exitStatus: "Active",
    coInvestors: ["GGV Capital", "Lightspeed Venture Partners"],
    investmentType: "Convertible Note",
    preMoneyValuation: 5800000,
    postMoneyValuation: 6200000,
    interestRate: 8,
    discount: 25,
    securityType: "Convertible Note",
    leadInvestor: "GGV Capital",
    boardSeat: false,
    liquidationPreference: "N/A",
    antiDilution: "N/A",
    notes: "Breakthrough AI technology, strong partnerships",
    nextMilestone: "Series A fundraising Q4 2024",
    documents: ["Convertible Note", "Side Letter"],
    unrealizedGain: 350000,
    distributionsReceived: 0,
  },
  {
    id: 6,
    company: "RetailTech Solutions",
    sector: "E-commerce",
    stage: "Growth",
    geography: "North America",
    invested: 1000000,
    currentValue: 0,
    ownership: 0,
    status: "Exited",
    irr: 18.5,
    moic: 2.3,
    investmentDate: "2021-04-20",
    lastValuationDate: "2024-03-15",
    exitStatus: "Acquired",
    coInvestors: ["Tiger Global", "Coatue Management"],
    investmentType: "Secondary",
    preMoneyValuation: 45000000,
    postMoneyValuation: 50000000,
    sharesHeld: 0,
    securityType: "Common Stock",
    leadInvestor: "Tiger Global",
    boardSeat: false,
    liquidationPreference: "N/A",
    antiDilution: "N/A",
    notes: "Successfully acquired by Amazon",
    nextMilestone: "N/A - Exited",
    documents: ["Purchase Agreement", "Exit Documents"],
    unrealizedGain: 0,
    distributionsReceived: 2300000,
  },
]

const quarterlyPerformance = [
  { quarter: "Q1", irr: 25, moic: 1.5 },
  { quarter: "Q2", irr: 27, moic: 1.6 },
  { quarter: "Q3", irr: 26, moic: 1.7 },
  { quarter: "Q4", irr: 28, moic: 1.8 },
]

export default function PrivateMarketTracker() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [sectorFilter, setSectorFilter] = useState("all")
  const [stageFilter, setStageFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedDeal, setSelectedDeal] = useState<(typeof deals)[0] | null>(null)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  const formatNumber = (value: number, decimals = 1) => {
    return value.toFixed(decimals)
  }

  const filteredDeals = deals.filter((deal) => {
    const matchesSearch =
      deal.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.sector.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = sectorFilter === "all" || deal.sector === sectorFilter
    const matchesStage = stageFilter === "all" || deal.stage === stageFilter
    const matchesStatus = statusFilter === "all" || deal.status === statusFilter

    return matchesSearch && matchesSector && matchesStage && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Underperforming":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Exited":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getIRRColor = (irr: number) => {
    if (irr > 20) return "text-green-500"
    if (irr > 0) return "text-blue-500"
    return "text-red-500"
  }

  const sectorData = sectorAllocation.map((sector) => ({
    name: sector.name,
    value: sector.amount,
    color: sector.color,
  }))

  const stageData = stageAllocation.map((stage) => ({
    name: stage.name,
    value: stage.amount,
  }))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground font-serif">Founders Capital</h1>
                  <p className="text-sm text-muted-foreground font-sans">Private Market Investment Tracker</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="font-sans bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="font-sans bg-transparent">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-foreground font-serif leading-tight">
                Private Market
                <br />
                <span className="iridescent-text">Investment Tracker</span>
              </h1>
              <p className="text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed">
                Professional portfolio management for private equity and venture capital investments. Track performance,
                manage capital flows, and analyze your private market portfolio.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <InstructionsModal />
            <Button variant="outline" size="lg" className="font-sans bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export Portfolio
            </Button>
            <Button size="lg" className="font-sans">
              <Plus className="w-4 h-4 mr-2" />
              Add Investment
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-secondary/50 p-1 rounded-xl">
            <TabsTrigger value="overview" className="font-sans">
              Portfolio Overview
            </TabsTrigger>
            <TabsTrigger value="deals" className="font-sans">
              Deal Tracking
            </TabsTrigger>
            <TabsTrigger value="performance" className="font-sans">
              Performance
            </TabsTrigger>
            <TabsTrigger value="capital" className="font-sans">
              Capital Flows
            </TabsTrigger>
            <TabsTrigger value="instructions" className="font-sans">
              Instructions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground font-sans">Total Invested</CardTitle>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-foreground font-serif">
                    {formatCurrency(portfolioData.totalInvested)}
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">{portfolioData.totalDeals} total deals</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground font-sans">
                    Current Valuation
                  </CardTitle>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-foreground font-serif">
                    {formatCurrency(portfolioData.currentValuation)}
                  </div>
                  <p className="text-sm text-green-600 font-sans flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    {formatPercentage((portfolioData.currentValuation / portfolioData.totalInvested - 1) * 100)}{" "}
                    unrealized gain
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground font-sans">Portfolio IRR</CardTitle>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-foreground font-serif">
                    {formatPercentage(portfolioData.irr)}
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">Internal Rate of Return</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground font-sans">MOIC</CardTitle>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-foreground font-serif">
                    {formatNumber(portfolioData.moic)}x
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">Multiple on Invested Capital</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-foreground font-serif">Sector Allocation</CardTitle>
                  <p className="text-sm text-muted-foreground font-sans">Investment distribution by sector</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => [formatCurrency(value), "Investment"]}
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {sectorData.map((sector, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }} />
                        <span className="text-sm text-muted-foreground font-sans">{sector.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-foreground font-serif">Stage Allocation</CardTitle>
                  <p className="text-sm text-muted-foreground font-sans">Investment distribution by stage</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={stageData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} className="font-sans" />
                      <YAxis
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                        className="font-sans"
                      />
                      <Tooltip
                        formatter={(value: number) => [formatCurrency(value), "Investment"]}
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Portfolio Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Portfolio Performance Over Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                      />
                      <Tooltip
                        formatter={(value: any, name: any) => {
                          const labels = {
                            value: "Portfolio Value",
                            invested: "Invested Capital",
                            distributions: "Cumulative Distributions",
                          }
                          return [formatCurrency(value), labels[name as keyof typeof labels] || name]
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))" }}
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stackId="1"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.3}
                        strokeWidth={2}
                        name="value"
                      />
                      <Area
                        type="monotone"
                        dataKey="distributions"
                        stackId="2"
                        stroke="#10B981"
                        fill="#10B981"
                        fillOpacity={0.3}
                        strokeWidth={2}
                        name="distributions"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Investment Stage Allocation */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Stage Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stageAllocation.map((stage, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-primary rounded-full" />
                        <span className="font-medium text-foreground">{stage.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {stage.deals} deals
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${stage.value}%` }} />
                        </div>
                        <span className="text-sm text-muted-foreground w-12">{stage.value}%</span>
                        <span className="text-sm font-medium text-foreground w-24 text-right">
                          {formatCurrency(stage.amount)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deals" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Deal Tracking</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Deal
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search companies or sectors..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={sectorFilter} onValueChange={setSectorFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Sectors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sectors</SelectItem>
                        <SelectItem value="FinTech">FinTech</SelectItem>
                        <SelectItem value="HealthTech">HealthTech</SelectItem>
                        <SelectItem value="SaaS">SaaS</SelectItem>
                        <SelectItem value="E-commerce">E-commerce</SelectItem>
                        <SelectItem value="AI/ML">AI/ML</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={stageFilter} onValueChange={setStageFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Stages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Stages</SelectItem>
                        <SelectItem value="Seed">Seed</SelectItem>
                        <SelectItem value="Series A">Series A</SelectItem>
                        <SelectItem value="Series B">Series B</SelectItem>
                        <SelectItem value="Growth">Growth</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Underperforming">Underperforming</SelectItem>
                        <SelectItem value="Exited">Exited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDeals.map((deal) => (
                <Card
                  key={deal.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedDeal(deal)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground">{deal.company}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {deal.sector}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {deal.stage}
                          </Badge>
                        </div>
                      </div>
                      <Badge className={`text-xs ${getStatusColor(deal.status)}`}>{deal.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Investment Type</span>
                      <span className="text-sm text-muted-foreground">{deal.investmentType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Pre-Money Valuation</span>
                      <span className="text-sm text-muted-foreground">{formatCurrency(deal.preMoneyValuation)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Post-Money Valuation</span>
                      <span className="text-sm text-muted-foreground">{formatCurrency(deal.postMoneyValuation)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Ownership</span>
                      <span className="text-sm text-muted-foreground">{deal.ownership}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">IRR</span>
                      <span className={`text-sm ${getIRRColor(deal.irr)}`}>{formatPercentage(deal.irr)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">MOIC</span>
                      <span className="text-sm text-muted-foreground">{deal.moic}x</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Unrealized Gain</span>
                      <span className="text-sm text-muted-foreground">{formatCurrency(deal.unrealizedGain)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Distributions Received</span>
                      <span className="text-sm text-muted-foreground">
                        {formatCurrency(deal.distributionsReceived)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Next Milestone</span>
                      <span className="text-sm text-muted-foreground">{deal.nextMilestone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Performance Analytics</h2>
              <div className="flex items-center space-x-2">
                <Select defaultValue="ytd">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ytd">YTD</SelectItem>
                    <SelectItem value="1y">1 Year</SelectItem>
                    <SelectItem value="3y">3 Years</SelectItem>
                    <SelectItem value="5y">5 Years</SelectItem>
                    <SelectItem value="inception">Inception</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Performance Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Portfolio IRR</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">24.5%</div>
                  <p className="text-xs text-green-500 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                    +2.3% vs benchmark
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Net MOIC</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">1.68x</div>
                  <p className="text-xs text-muted-foreground">Across all investments</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Realized Returns</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">$2.3M</div>
                  <p className="text-xs text-muted-foreground">From 3 exits</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Win Rate</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">75%</div>
                  <p className="text-xs text-muted-foreground">9 of 12 deals positive</p>
                </CardContent>
              </Card>
            </div>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* IRR by Vintage Year */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>IRR by Vintage Year</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { year: "2021", irr: 18.5, benchmark: 15.2 },
                          { year: "2022", irr: 22.3, benchmark: 18.7 },
                          { year: "2023", irr: 28.1, benchmark: 21.4 },
                          { year: "2024", irr: 31.2, benchmark: 24.8 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="irr" fill="#3B82F6" name="Portfolio IRR" />
                        <Bar dataKey="benchmark" fill="#94A3B8" name="Benchmark" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* MOIC Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChartIcon className="w-5 h-5" />
                    <span>MOIC Distribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { range: "0-1x", count: 2, color: "#EF4444" },
                          { range: "1-2x", count: 4, color: "#F59E0B" },
                          { range: "2-3x", count: 3, color: "#10B981" },
                          { range: "3x+", count: 3, color: "#3B82F6" },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="range" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="count" fill="#3B82F6" name="Number of Deals" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance by Sector */}
            <Card>
              <CardHeader>
                <CardTitle>Performance by Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="p-4 font-medium text-muted-foreground">Sector</th>
                        <th className="p-4 font-medium text-muted-foreground">Deals</th>
                        <th className="p-4 font-medium text-muted-foreground">Invested</th>
                        <th className="p-4 font-medium text-muted-foreground">Current Value</th>
                        <th className="p-4 font-medium text-muted-foreground">IRR</th>
                        <th className="p-4 font-medium text-muted-foreground">MOIC</th>
                        <th className="p-4 font-medium text-muted-foreground">DPI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          sector: "FinTech",
                          deals: 4,
                          invested: 1200000,
                          currentValue: 2100000,
                          irr: 28.5,
                          moic: 1.75,
                          dpi: 0.25,
                        },
                        {
                          sector: "HealthTech",
                          deals: 3,
                          invested: 800000,
                          currentValue: 1350000,
                          irr: 32.1,
                          moic: 1.69,
                          dpi: 0.15,
                        },
                        {
                          sector: "SaaS",
                          deals: 2,
                          invested: 1100000,
                          currentValue: 1800000,
                          irr: 22.3,
                          moic: 1.64,
                          dpi: 0.45,
                        },
                        {
                          sector: "E-commerce",
                          deals: 2,
                          invested: 600000,
                          currentValue: 480000,
                          irr: -5.2,
                          moic: 0.8,
                          dpi: 0.8,
                        },
                        {
                          sector: "AI/ML",
                          deals: 1,
                          invested: 300000,
                          currentValue: 650000,
                          irr: 45.2,
                          moic: 2.17,
                          dpi: 0.0,
                        },
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="p-4 font-medium text-foreground">{row.sector}</td>
                          <td className="p-4 text-foreground">{row.deals}</td>
                          <td className="p-4 text-foreground">{formatCurrency(row.invested)}</td>
                          <td className="p-4 text-foreground">{formatCurrency(row.currentValue)}</td>
                          <td className={`p-4 font-medium ${getIRRColor(row.irr)}`}>{formatPercentage(row.irr)}</td>
                          <td className="p-4 text-foreground">{row.moic}x</td>
                          <td className="p-4 text-foreground">{row.dpi}x</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics Over Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Performance Metrics Over Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { quarter: "Q1 2023", irr: 18.2, moic: 1.45, dpi: 0.15, tvpi: 1.6 },
                        { quarter: "Q2 2023", irr: 21.8, moic: 1.52, dpi: 0.22, tvpi: 1.74 },
                        { quarter: "Q3 2023", irr: 23.1, moic: 1.61, dpi: 0.28, tvpi: 1.89 },
                        { quarter: "Q4 2023", irr: 24.5, moic: 1.68, dpi: 0.32, tvpi: 2.0 },
                        { quarter: "Q1 2024", irr: 25.2, moic: 1.72, dpi: 0.35, tvpi: 2.07 },
                        { quarter: "Q2 2024", irr: 24.8, moic: 1.69, dpi: 0.38, tvpi: 2.07 },
                        { quarter: "Q3 2024", irr: 24.5, moic: 1.68, dpi: 0.32, tvpi: 2.0 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Line type="monotone" dataKey="irr" stroke="#3B82F6" strokeWidth={2} name="IRR %" />
                      <Line type="monotone" dataKey="moic" stroke="#10B981" strokeWidth={2} name="MOIC" />
                      <Line type="monotone" dataKey="dpi" stroke="#F59E0B" strokeWidth={2} name="DPI" />
                      <Line type="monotone" dataKey="tvpi" stroke="#EF4444" strokeWidth={2} name="TVPI" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center space-x-6 mt-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-muted-foreground">IRR</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-muted-foreground">MOIC</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-muted-foreground">DPI</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-muted-foreground">TVPI</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Performers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span>Top Performers (IRR)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { company: "AI Vision Labs", sector: "AI/ML", irr: 45.2, moic: 2.17 },
                      { company: "HealthSync", sector: "HealthTech", irr: 32.1, moic: 1.68 },
                      { company: "TechFlow Solutions", sector: "FinTech", irr: 28.5, moic: 1.7 },
                      { company: "DataVault Pro", sector: "SaaS", irr: 22.3, moic: 1.6 },
                    ].map((deal, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <div className="font-medium text-foreground">{deal.company}</div>
                          <div className="text-sm text-muted-foreground">{deal.sector}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-500">{formatPercentage(deal.irr)}</div>
                          <div className="text-sm text-muted-foreground">{deal.moic}x MOIC</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingDown className="w-5 h-5 text-red-500" />
                    <span>Underperformers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { company: "EcoLogistics", sector: "E-commerce", irr: -8.2, moic: 0.8, status: "Restructuring" },
                      { company: "RetailConnect", sector: "E-commerce", irr: 2.1, moic: 1.1, status: "Slow Growth" },
                    ].map((deal, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <div className="font-medium text-foreground">{deal.company}</div>
                          <div className="text-sm text-muted-foreground">{deal.sector}</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-medium ${getIRRColor(deal.irr)}`}>{formatPercentage(deal.irr)}</div>
                          <div className="text-sm text-muted-foreground">{deal.moic}x MOIC</div>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 bg-muted/30 rounded-lg text-center">
                      <div className="text-sm text-muted-foreground">2 deals requiring attention</div>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        View Action Items
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benchmark Comparison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Benchmark Comparison</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">24.5%</div>
                    <div className="text-sm text-muted-foreground">Portfolio IRR</div>
                    <div className="text-xs text-green-500 mt-1">+2.3% vs benchmark</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">1.68x</div>
                    <div className="text-sm text-muted-foreground">Portfolio MOIC</div>
                    <div className="text-xs text-green-500 mt-1">+0.15x vs benchmark</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">75%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                    <div className="text-xs text-green-500 mt-1">+10% vs benchmark</div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-muted-foreground mb-2">Performance vs Industry Benchmark</div>
                  <Progress value={75} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Bottom Quartile</span>
                    <span>Top Quartile</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="capital" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Capital Calls & Distributions</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Transaction
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Capital Flow Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Capital Called</CardTitle>
                  <ArrowUpRight className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">$2.5M</div>
                  <p className="text-xs text-muted-foreground">Across 12 investments</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Distributions</CardTitle>
                  <TrendingDown className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">$800K</div>
                  <p className="text-xs text-green-500">32% of invested capital</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Net Cash Flow</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-500">-$1.7M</div>
                  <p className="text-xs text-muted-foreground">Outstanding investment</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Calls</CardTitle>
                  <Calendar className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">$150K</div>
                  <p className="text-xs text-yellow-500">Due within 30 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Cash Flow Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Capital Flow Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { month: "Jan", calls: -200000, distributions: 0, net: -200000 },
                        { month: "Feb", calls: -150000, distributions: 50000, net: -100000 },
                        { month: "Mar", calls: -300000, distributions: 100000, net: -200000 },
                        { month: "Apr", calls: -250000, distributions: 150000, net: -100000 },
                        { month: "May", calls: 0, distributions: 200000, net: 200000 },
                        { month: "Jun", calls: -100000, distributions: 300000, net: 200000 },
                        { month: "Jul", calls: -200000, distributions: 400000, net: 200000 },
                        { month: "Aug", calls: 0, distributions: 600000, net: 600000 },
                        { month: "Sep", calls: -150000, distributions: 800000, net: 650000 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip
                        formatter={(value: any, name: any) => {
                          const labels = {
                            calls: "Capital Calls",
                            distributions: "Distributions",
                            net: "Net Cash Flow",
                          }
                          return [formatCurrency(value), labels[name as keyof typeof labels] || name]
                        }}
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="calls" fill="#EF4444" name="calls" />
                      <Bar dataKey="distributions" fill="#10B981" name="distributions" />
                      <Line type="monotone" dataKey="net" stroke="#3B82F6" strokeWidth={2} name="net" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ArrowUpRight className="w-5 h-5 text-red-500" />
                    <span>Recent Capital Calls</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        date: "2024-09-15",
                        company: "TechFlow Solutions",
                        amount: 150000,
                        purpose: "Series B Participation",
                        status: "Paid",
                      },
                      {
                        date: "2024-08-20",
                        company: "HealthSync",
                        amount: 75000,
                        purpose: "Bridge Financing",
                        status: "Paid",
                      },
                      {
                        date: "2024-07-10",
                        company: "AI Vision Labs",
                        amount: 100000,
                        purpose: "Series A Follow-on",
                        status: "Pending",
                      },
                      {
                        date: "2024-06-25",
                        company: "DataVault Pro",
                        amount: 200000,
                        purpose: "Growth Capital",
                        status: "Paid",
                      },
                    ].map((call, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <div className="font-medium text-foreground">{call.company}</div>
                          <div className="text-sm text-muted-foreground">{call.purpose}</div>
                          <div className="text-xs text-muted-foreground">{call.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-red-500">{formatCurrency(call.amount)}</div>
                          <Badge variant={call.status === "Paid" ? "default" : "secondary"} className="text-xs">
                            {call.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingDown className="w-5 h-5 text-green-500" />
                    <span>Recent Distributions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        date: "2024-09-01",
                        company: "RetailTech Solutions",
                        amount: 2300000,
                        type: "Exit Distribution",
                        status: "Received",
                      },
                      {
                        date: "2024-07-15",
                        company: "DataVault Pro",
                        amount: 150000,
                        type: "Dividend",
                        status: "Received",
                      },
                      {
                        date: "2024-05-20",
                        company: "TechFlow Solutions",
                        amount: 75000,
                        type: "Interim Distribution",
                        status: "Received",
                      },
                      {
                        date: "2024-03-10",
                        company: "HealthSync",
                        amount: 50000,
                        type: "Return of Capital",
                        status: "Received",
                      },
                    ].map((dist, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <div className="font-medium text-foreground">{dist.company}</div>
                          <div className="text-sm text-muted-foreground">{dist.type}</div>
                          <div className="text-xs text-muted-foreground">{dist.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-500">{formatCurrency(dist.amount)}</div>
                          <Badge variant="default" className="text-xs">
                            {dist.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Capital Commitment Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Capital Commitment Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="p-4 font-medium text-muted-foreground">Investment</th>
                        <th className="p-4 font-medium text-muted-foreground">Total Commitment</th>
                        <th className="p-4 font-medium text-muted-foreground">Called to Date</th>
                        <th className="p-4 font-medium text-muted-foreground">Remaining</th>
                        <th className="p-4 font-medium text-muted-foreground">% Called</th>
                        <th className="p-4 font-medium text-muted-foreground">Distributions</th>
                        <th className="p-4 font-medium text-muted-foreground">Net Cash Flow</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          company: "TechFlow Solutions",
                          commitment: 500000,
                          called: 500000,
                          remaining: 0,
                          percentCalled: 100,
                          distributions: 0,
                          netCashFlow: -500000,
                        },
                        {
                          company: "HealthSync",
                          commitment: 300000,
                          called: 250000,
                          remaining: 50000,
                          percentCalled: 83.3,
                          distributions: 0,
                          netCashFlow: -250000,
                        },
                        {
                          company: "DataVault Pro",
                          commitment: 750000,
                          called: 750000,
                          remaining: 0,
                          percentCalled: 100,
                          distributions: 150000,
                          netCashFlow: -600000,
                        },
                        {
                          company: "EcoLogistics",
                          commitment: 400000,
                          called: 400000,
                          remaining: 0,
                          percentCalled: 100,
                          distributions: 0,
                          netCashFlow: -400000,
                        },
                        {
                          company: "AI Vision Labs",
                          commitment: 400000,
                          called: 300000,
                          remaining: 100000,
                          percentCalled: 75,
                          distributions: 0,
                          netCashFlow: -300000,
                        },
                        {
                          company: "RetailTech Solutions",
                          commitment: 1000000,
                          called: 1000000,
                          remaining: 0,
                          percentCalled: 100,
                          distributions: 2300000,
                          netCashFlow: 1300000,
                        },
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="p-4 font-medium text-foreground">{row.company}</td>
                          <td className="p-4 text-foreground">{formatCurrency(row.commitment)}</td>
                          <td className="p-4 text-foreground">{formatCurrency(row.called)}</td>
                          <td className="p-4 text-foreground">{formatCurrency(row.remaining)}</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Progress value={row.percentCalled} className="w-16 h-2" />
                              <span className="text-sm text-muted-foreground">{row.percentCalled.toFixed(1)}%</span>
                            </div>
                          </td>
                          <td className="p-4 text-green-500 font-medium">{formatCurrency(row.distributions)}</td>
                          <td className={`p-4 font-medium ${row.netCashFlow >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {formatCurrency(row.netCashFlow)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Capital Calls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                  <span>Upcoming Capital Calls</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "2024-10-15",
                      company: "AI Vision Labs",
                      amount: 100000,
                      purpose: "Series A Final Close",
                      daysUntil: 12,
                      status: "Confirmed",
                    },
                    {
                      date: "2024-11-01",
                      company: "HealthSync",
                      amount: 50000,
                      purpose: "Working Capital",
                      daysUntil: 29,
                      status: "Pending Confirmation",
                    },
                    {
                      date: "2024-11-20",
                      company: "TechFlow Solutions",
                      amount: 200000,
                      purpose: "Series B Participation",
                      daysUntil: 48,
                      status: "Estimated",
                    },
                  ].map((call, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{call.company}</div>
                          <div className="text-sm text-muted-foreground">{call.purpose}</div>
                          <div className="text-xs text-muted-foreground">Due: {call.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-foreground">{formatCurrency(call.amount)}</div>
                        <div className="text-sm text-muted-foreground">{call.daysUntil} days</div>
                        <Badge variant={call.status === "Confirmed" ? "default" : "secondary"} className="text-xs mt-1">
                          {call.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-foreground">
                      Total Upcoming Calls (90 days): {formatCurrency(350000)}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Ensure sufficient liquidity for upcoming capital requirements
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cash Flow Projections */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Cash Flow Projections (Next 12 Months)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: "Oct", projected: -100000, actual: null },
                        { month: "Nov", projected: -50000, actual: null },
                        { month: "Dec", projected: 200000, actual: null },
                        { month: "Jan", projected: -150000, actual: null },
                        { month: "Feb", projected: 100000, actual: null },
                        { month: "Mar", projected: 300000, actual: null },
                        { month: "Apr", projected: -75000, actual: null },
                        { month: "May", projected: 150000, actual: null },
                        { month: "Jun", projected: 250000, actual: null },
                        { month: "Jul", projected: -100000, actual: null },
                        { month: "Aug", projected: 400000, actual: null },
                        { month: "Sep", projected: 200000, actual: null },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      />
                      <Tooltip
                        formatter={(value: any) => [formatCurrency(value), "Projected Net Cash Flow"]}
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="projected"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="projected"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Projections based on expected capital calls, distributions, and exit timelines
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How to Use the Private Market Investment Tracker</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h3>Getting Started</h3>
                <p>
                  This tracker helps you monitor your private market investments with professional-grade analytics and
                  reporting.
                </p>

                <h3>Key Features</h3>
                <ul>
                  <li>
                    <strong>Portfolio Overview:</strong> Track total invested capital, current valuations, and key
                    performance metrics
                  </li>
                  <li>
                    <strong>Deal Tracking:</strong> Monitor individual investments with detailed company information
                  </li>
                  <li>
                    <strong>Performance Analytics:</strong> Calculate IRR, MOIC, and DPI across your portfolio
                  </li>
                  <li>
                    <strong>Capital Management:</strong> Track capital calls and distributions
                  </li>
                </ul>

                <h3>Sample Data</h3>
                <p>
                  This tracker comes pre-loaded with sample data to demonstrate functionality. Replace with your actual
                  investment data.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Lead Magnet Footer */}
        <LeadMagnetFooter />
      </div>
    </div>
  )
}
