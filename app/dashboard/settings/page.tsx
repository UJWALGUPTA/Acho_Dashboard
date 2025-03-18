"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Mail, Lock, Shield, Globe, Save } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900/60 border-gray-800 mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <User className="h-5 w-5" />
                        </div>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-gray-400 mb-1">Email</label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <Mail className="h-5 w-5" />
                        </div>
                        <input
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Bio</label>
                    <textarea
                      rows={4}
                      defaultValue="Web3 enthusiast and crypto investor. Passionate about decentralized technologies and blockchain innovations."
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="security">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900/60 border-gray-800 mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Security Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Current Password</label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <Lock className="h-5 w-5" />
                      </div>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-400 mb-1">New Password</label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <Lock className="h-5 w-5" />
                        </div>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-gray-400 mb-1">Confirm New Password</label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <Lock className="h-5 w-5" />
                        </div>
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Update Password
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Two-Factor Authentication</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 mb-1">Enhance your account security with 2FA</p>
                    <p className="text-sm text-gray-400">Protect your account with an additional layer of security</p>
                  </div>
                  <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                    <Shield className="h-4 w-4 mr-2" />
                    Enable 2FA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900/60 border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <div>
                      <p className="font-medium">Campaign Updates</p>
                      <p className="text-sm text-gray-400">Receive updates about your campaign performance</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <div>
                      <p className="font-medium">AI Validation Alerts</p>
                      <p className="text-sm text-gray-400">Get notified when AI validation is completed</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <div>
                      <p className="font-medium">Payment Notifications</p>
                      <p className="text-sm text-gray-400">Receive updates about payments and transactions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-gray-400">Receive news and updates about Acho.AI</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="api">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900/60 border-gray-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">API Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">API Key</label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <Globe className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        value="sk_live_51HG7d9JKl0Gk9TgDBUHkxYs..."
                        readOnly
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 mb-1">API Access</p>
                      <p className="text-sm text-gray-400">Enable or disable API access for your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                      Regenerate API Key
                    </Button>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

