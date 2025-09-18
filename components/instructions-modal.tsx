"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, Download, FileText, BarChart3, TrendingUp, Users, Target, CheckCircle } from "lucide-react"

export function InstructionsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <HelpCircle className="w-4 h-4 mr-2" />
          How to Use This Tool
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Private Market Investment Tracker - User Guide</span>
          </DialogTitle>
          <DialogDescription>
            Complete guide to using your professional private market investment tracking tool
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="data">Sample Data</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>What This Tool Does</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This Private Market Investment Tracker provides institutional-grade portfolio management capabilities
                  for private equity, venture capital, and alternative investments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4" />
                      <span>Key Metrics Tracked</span>
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• IRR (Internal Rate of Return)</li>
                      <li>• MOIC (Multiple on Invested Capital)</li>
                      <li>• DPI (Distributions to Paid-in Capital)</li>
                      <li>• TVPI (Total Value to Paid-in Capital)</li>
                      <li>• Unrealized vs. Realized Returns</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Portfolio Analytics</span>
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sector & Stage Diversification</li>
                      <li>• Geographic Allocation</li>
                      <li>• Vintage Year Analysis</li>
                      <li>• Performance vs. Benchmarks</li>
                      <li>• Risk-Adjusted Returns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Who This Is For</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium">Fund Managers</h4>
                    <p className="text-sm text-muted-foreground mt-2">Track portfolio performance and report to LPs</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium">Family Offices</h4>
                    <p className="text-sm text-muted-foreground mt-2">Manage direct investments and fund commitments</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium">Institutional Investors</h4>
                    <p className="text-sm text-muted-foreground mt-2">Monitor alternative investment allocations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Portfolio Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Real-time portfolio valuation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Key performance metrics dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Sector and geographic allocation charts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Performance trend analysis</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deal Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Individual investment monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Investment stage tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Valuation history and multiples</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced filtering and search</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Benchmark comparison analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Risk-adjusted return metrics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Vintage year performance tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Attribution analysis by sector/stage</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Capital Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Capital call tracking and forecasting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Distribution monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cash flow projections</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Commitment vs. funding analysis</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sample Portfolio Data</CardTitle>
                <p className="text-sm text-muted-foreground">
                  This tool comes pre-loaded with realistic sample data to demonstrate all features
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Sample Investments Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TechFlow Solutions (Series B, SaaS)</li>
                      <li>• HealthSync (Series A, HealthTech)</li>
                      <li>• DataVault Pro (Growth, Enterprise Software)</li>
                      <li>• EcoLogistics (Series A, CleanTech)</li>
                      <li>• AI Vision Labs (Seed, AI/ML)</li>
                      <li>• RetailTech Solutions (Exited, 3.2x MOIC)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Data Points Tracked:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Investment amounts and dates</li>
                      <li>• Current valuations and multiples</li>
                      <li>• Capital calls and distributions</li>
                      <li>• Company metrics and KPIs</li>
                      <li>• Board representation details</li>
                      <li>• Exit scenarios and outcomes</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-500/10 rounded-lg">
                  <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Portfolio Summary (Sample Data)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Total Invested</div>
                      <div className="font-medium">$3.65M</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Current Value</div>
                      <div className="font-medium">$5.2M</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Net IRR</div>
                      <div className="font-medium text-green-500">24.5%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Total MOIC</div>
                      <div className="font-medium text-green-500">1.42x</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Replace with Your Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Step 1: Data Structure</h4>
                  <p className="text-sm text-muted-foreground">
                    The sample data is structured in arrays within the main page component. Each investment includes
                    fields like company name, sector, stage, investment amount, current valuation, and performance
                    metrics.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Step 2: Data Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    For production use, replace the static arrays with API calls to your data source. Common
                    integrations include portfolio management systems, accounting software, or custom databases.
                  </p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Step 3: Customization</h4>
                  <p className="text-sm text-muted-foreground">
                    Modify the metrics, charts, and layouts to match your specific reporting requirements. The component
                    structure is modular and easily customizable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customize" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customization Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Branding & Design</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Update logo and company name</li>
                      <li>• Customize color scheme and themes</li>
                      <li>• Modify typography and spacing</li>
                      <li>• Add custom CSS styling</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Functionality</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Add/remove metrics and KPIs</li>
                      <li>• Customize chart types and data</li>
                      <li>• Modify filtering and search options</li>
                      <li>• Add export and reporting features</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 rounded-lg">
                  <h4 className="font-medium text-green-700 dark:text-green-300 mb-2">Ready for Production</h4>
                  <p className="text-sm text-muted-foreground">
                    This tool is built with production-ready components and can be easily deployed to Vercel, AWS, or
                    any modern hosting platform. All dependencies are included and the code follows industry best
                    practices.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Download the Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Export this project and set up your development environment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Connect Your Data</h4>
                    <p className="text-sm text-muted-foreground">
                      Replace sample data with your actual portfolio information
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Customize & Deploy</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailor the interface to your needs and deploy to production
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            Built by <span className="font-medium">Founders Capital</span> • Professional Investment Tracking
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
