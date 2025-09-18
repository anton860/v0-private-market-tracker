import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Globe, Download, Star, Users, TrendingUp, Shield } from "lucide-react"

export function LeadMagnetFooter() {
  return (
    <div className="mt-12 space-y-6">
      {/* Call to Action Section */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Badge variant="secondary" className="px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Professional Investment Tracking Tool
              </Badge>
            </div>

            <h2 className="text-3xl font-bold text-foreground">Ready to Upgrade Your Investment Tracking?</h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This tool demonstrates the power of professional-grade portfolio management. Get a custom solution
              tailored to your specific investment strategy and reporting needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-medium text-foreground">Custom Development</h3>
                <p className="text-sm text-muted-foreground mt-1">Tailored solutions for your investment workflow</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-medium text-foreground">Advanced Analytics</h3>
                <p className="text-sm text-muted-foreground mt-1">Institutional-grade performance metrics</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-medium text-foreground">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground mt-1">Bank-grade security and compliance</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="px-8">
                <Mail className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download Full Demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">Your Company Name</h3>
            <p className="text-muted-foreground">Professional investment management solutions for modern portfolios</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@yourcompany.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>www.yourcompany.com</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                © 2024 Your Company Name. This tool is provided as a demonstration of our investment tracking
                capabilities. All sample data is fictional and for illustrative purposes only.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
