"use client"

import Layout from "@/components/layout"
import {
  ArrowDown,
  ArrowUp,
  BarChart2,
  Calendar,
  Check,
  Clock,
  CoinsIcon,
  CreditCard,
  DollarSign,
  LayoutDashboard,
  ListFilter,
  LogOut,
  Menu,
  Search,
  Settings,
  Truck,
  User,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function TransactionHistory() {
  const [activeTab, setActiveTab] = useState("history")
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"crypto" | "amount" | "date" | null>(null)
  const [filters, setFilters] = useState({
    cryptoType: [] as string[],
    amountSort: null as "asc" | "desc" | null,
    dateRange: null as "24h" | "week" | "month" | null,
  })

  const filterRef = useRef<HTMLDivElement>(null)

  // Close filter when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilters(false)
        setActiveFilter(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const allTransactions = [
    {
      type: "Bitcoin",
      direction: "incoming",
      amount: 0.15,
      amountDisplay: "0.15 BTC",
      date: "21 April 2025",
      time: "14:23",
      address: "24676v*8888",
      isFrom: true,
      timestamp: new Date("2025-04-21T14:23:00").getTime(),
    },
    {
      type: "Ethereum",
      direction: "outgoing",
      amount: 0.205,
      amountDisplay: "0.205 ETC",
      date: "27 March 2025",
      time: "17:25",
      address: "78676v*88872",
      isFrom: false,
      timestamp: new Date("2025-03-27T17:25:00").getTime(),
    },
    {
      type: "Litecoin",
      direction: "incoming",
      amount: 1.76,
      amountDisplay: "1.76 LTC",
      date: "25 March 2025",
      time: "17:38",
      address: "78676v*45889",
      isFrom: true,
      timestamp: new Date("2025-03-25T17:38:00").getTime(),
    },
    {
      type: "Litecoin",
      direction: "incoming",
      amount: 2.3,
      amountDisplay: "2.30 LTC",
      date: "25 March 2025",
      time: "02:37",
      address: "78676v*23445",
      isFrom: true,
      timestamp: new Date("2025-03-25T02:37:00").getTime(),
    },
    {
      type: "Dogecoin",
      direction: "outgoing",
      amount: 1.06,
      amountDisplay: "1.06 DOGE",
      date: "17 March 2025",
      time: "10:38",
      address: "23480v*45889",
      isFrom: false,
      timestamp: new Date("2025-03-17T10:38:00").getTime(),
    },
    {
      type: "Bitcoin",
      direction: "outgoing",
      amount: 1.76,
      amountDisplay: "1.76 BTC",
      date: "15 March 2025",
      time: "17:38",
      address: "24676v*8888",
      isFrom: false,
      timestamp: new Date("2025-03-15T17:38:00").getTime(),
    },
    {
      type: "Ethereum",
      direction: "outgoing",
      amount: 0.107,
      amountDisplay: "0.107 ETC",
      date: "11 March 2025",
      time: "17:25",
      address: "78676v*88897",
      isFrom: false,
      timestamp: new Date("2025-03-11T17:25:00").getTime(),
    },
    {
      type: "Tether",
      direction: "incoming",
      amount: 100,
      amountDisplay: "100 USDT",
      date: "5 March 2025",
      time: "09:12",
      address: "34567v*12345",
      isFrom: true,
      timestamp: new Date("2025-03-05T09:12:00").getTime(),
    },
  ]

  // Filter transactions based on selected filters
  const filteredTransactions = allTransactions
    .filter((transaction) => {
      // Filter by crypto type
      if (filters.cryptoType.length > 0 && !filters.cryptoType.includes(transaction.type)) {
        return false
      }

      // Filter by date range
      if (filters.dateRange) {
        const now = new Date().getTime()
        const ranges = {
          "24h": 24 * 60 * 60 * 1000,
          week: 7 * 24 * 60 * 60 * 1000,
          month: 30 * 24 * 60 * 60 * 1000,
        }

        if (now - transaction.timestamp > ranges[filters.dateRange]) {
          return false
        }
      }

      return true
    })
    .sort((a, b) => {
      // Sort by amount
      if (filters.amountSort === "asc") {
        return a.amount - b.amount
      } else if (filters.amountSort === "desc") {
        return b.amount - a.amount
      }

      // Default sort by date (newest first)
      return b.timestamp - a.timestamp
    })

  const toggleCryptoFilter = (type: string) => {
    setFilters((prev) => {
      const newTypes = prev.cryptoType.includes(type)
        ? prev.cryptoType.filter((t) => t !== type)
        : [...prev.cryptoType, type]

      return {
        ...prev,
        cryptoType: newTypes,
      }
    })
  }

  const toggleAmountSort = (sort: "asc" | "desc" | null) => {
    setFilters((prev) => ({
      ...prev,
      amountSort: prev.amountSort === sort ? null : sort,
    }))
  }

  const toggleDateRange = (range: "24h" | "week" | "month" | null) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: prev.dateRange === range ? null : range,
    }))
  }

  const toggleFilterMenu = (filter: "crypto" | "amount" | "date" | null) => {
    if (activeFilter === filter) {
      setActiveFilter(null)
    } else {
      setActiveFilter(filter)
      setShowFilters(true)
    }
  }

  const clearFilters = () => {
    setFilters({
      cryptoType: [],
      amountSort: null,
      dateRange: null,
    })
    setActiveFilter(null)
    setShowFilters(false)
  }

  return (
    <Layout>
        {/* Main content */}
        <div className=" overflow-hidden rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Transaction History</h1>
            <div className="relative" ref={filterRef}>
              <button
                className={`text-[#00ff9d] border border-[#00ff9d] p-2 rounded hover:bg-[#00ff9d20] ${showFilters ? "bg-[#00ff9d20]" : ""}`}
                onClick={() => {
                  setShowFilters(!showFilters)
                  setActiveFilter(null)
                }}
              >
                <ListFilter width={20} />
              </button>

              {/* Filter popup */}
              {showFilters && (
                <div className="absolute right-0 top-12 z-10 bg-[#111] border border-[#333] rounded-lg shadow-lg w-64">
                  <div className="p-3 border-b border-[#333]">
                    <div
                      className={`flex items-center justify-between cursor-pointer p-2 rounded ${activeFilter === "crypto" ? "bg-[#00ff9d20] text-[#00ff9d]" : ""}`}
                      onClick={() => toggleFilterMenu("crypto")}
                    >
                      <div className="flex items-center gap-2">
                        <CoinsIcon size={18} />
                        <span>Crypto type</span>
                      </div>
                      {filters.cryptoType.length > 0 && (
                        <span className="text-xs bg-[#00ff9d] text-black px-2 py-0.5 rounded-full">
                          {filters.cryptoType.length}
                        </span>
                      )}
                    </div>

                    <div
                      className={`flex items-center justify-between cursor-pointer p-2 rounded ${activeFilter === "amount" ? "bg-[#00ff9d20] text-[#00ff9d]" : ""}`}
                      onClick={() => toggleFilterMenu("amount")}
                    >
                      <div className="flex items-center gap-2">
                        <DollarSign size={18} />
                        <span>Amount</span>
                      </div>
                      {filters.amountSort && (
                        <span className="text-xs bg-[#00ff9d] text-black px-2 py-0.5 rounded-full">1</span>
                      )}
                    </div>

                    <div
                      className={`flex items-center justify-between cursor-pointer p-2 rounded ${activeFilter === "date" ? "bg-[#00ff9d20] text-[#00ff9d]" : ""}`}
                      onClick={() => toggleFilterMenu("date")}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>Date</span>
                      </div>
                      {filters.dateRange && (
                        <span className="text-xs bg-[#00ff9d] text-black px-2 py-0.5 rounded-full">1</span>
                      )}
                    </div>
                  </div>

                  {/* Crypto type filter options */}
                  {activeFilter === "crypto" && (
                    <div className="p-3">
                      {["Bitcoin", "Ethereum", "Litecoin", "Tether"].map((crypto) => (
                        <div
                          key={crypto}
                          className={`flex items-center justify-between p-2 cursor-pointer rounded ${filters.cryptoType.includes(crypto) ? "bg-[#00ff9d] text-black" : ""}`}
                          onClick={() => toggleCryptoFilter(crypto)}
                        >
                          <div className="flex items-center gap-2">
                            <CryptoIcon type={crypto} small />
                            <span>{crypto}</span>
                          </div>
                          {filters.cryptoType.includes(crypto) && <Check size={16} />}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Amount filter options */}
                  {activeFilter === "amount" && (
                    <div className="p-3">
                      <div
                        className={`flex items-center justify-between p-2 cursor-pointer rounded ${filters.amountSort === "asc" ? "bg-[#00ff9d] text-black" : ""}`}
                        onClick={() => toggleAmountSort("asc")}
                      >
                        <span>Least to most</span>
                        {filters.amountSort === "asc" && <Check size={16} />}
                      </div>
                      <div
                        className={`flex items-center justify-between p-2 cursor-pointer rounded ${filters.amountSort === "desc" ? "bg-[#00ff9d] text-black" : ""}`}
                        onClick={() => toggleAmountSort("desc")}
                      >
                        <span>Most to least</span>
                        {filters.amountSort === "desc" && <Check size={16} />}
                      </div>
                    </div>
                  )}

                  {/* Date filter options */}
                  {activeFilter === "date" && (
                    <div className="p-3">
                      <div
                        className={`flex items-center justify-between p-2 cursor-pointer rounded ${filters.dateRange === "24h" ? "bg-[#00ff9d] text-black" : ""}`}
                        onClick={() => toggleDateRange("24h")}
                      >
                        <span>Past 24 hours</span>
                        {filters.dateRange === "24h" && <Check size={16} />}
                      </div>
                      <div
                        className={`flex items-center justify-between p-2 cursor-pointer rounded ${filters.dateRange === "week" ? "bg-[#00ff9d] text-black" : ""}`}
                        onClick={() => toggleDateRange("week")}
                      >
                        <span>Past Week</span>
                        {filters.dateRange === "week" && <Check size={16} />}
                      </div>
                      <div
                        className={`flex items-center justify-between p-2 cursor-pointer rounded ${filters.dateRange === "month" ? "bg-[#00ff9d] text-black" : ""}`}
                        onClick={() => toggleDateRange("month")}
                      >
                        <span>Past Month</span>
                        {filters.dateRange === "month" && <Check size={16} />}
                      </div>
                    </div>
                  )}

                  {/* Clear filters button */}
                  {(filters.cryptoType.length > 0 || filters.amountSort || filters.dateRange) && (
                    <div className="p-3 border-t border-[#333]">
                      <button className="w-full text-center text-[#00ff9d] hover:underline" onClick={clearFilters}>
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Active filters display */}
          {(filters.cryptoType.length > 0 || filters.amountSort || filters.dateRange) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.cryptoType.map((type) => (
                <div
                  key={type}
                  className="bg-[#00ff9d20] text-[#00ff9d] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  {type}
                  <button onClick={() => toggleCryptoFilter(type)} className="ml-1">
                    ×
                  </button>
                </div>
              ))}

              {filters.amountSort && (
                <div className="bg-[#00ff9d20] text-[#00ff9d] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  Amount: {filters.amountSort === "asc" ? "Low to High" : "High to Low"}
                  <button onClick={() => toggleAmountSort(filters.amountSort)} className="ml-1">
                    ×
                  </button>
                </div>
              )}

              {filters.dateRange && (
                <div className="bg-[#00ff9d20] text-[#00ff9d] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {filters.dateRange === "24h" ? "Last 24h" : filters.dateRange === "week" ? "Last Week" : "Last Month"}
                  <button onClick={() => toggleDateRange(filters.dateRange)} className="ml-1">
                    ×
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="space-y-3">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction, index) => (
                <div
                  key={index}
                  className="bg-[#111] bg-opacity-70 border border-[#333] rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-full ${transaction.direction === "incoming" ? "bg-[#002211]" : "bg-[#220011]"}`}
                    >
                      {transaction.direction === "incoming" ? (
                        <ArrowDown className="h-5 w-5 text-[#00ff9d]" />
                      ) : (
                        <ArrowUp className="h-5 w-5 text-[#ff5577]" />
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <CryptoIcon type={transaction.type} />
                      <div>
                        <div className="font-medium">{transaction.type}</div>
                        <div className="text-sm text-gray-400">
                          {transaction.isFrom ? "From: " : "To: "}
                          {transaction.address}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold">{transaction.amountDisplay}</div>
                    <div className="text-sm text-gray-400">
                      {transaction.date} {transaction.time}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400">No transactions match your filters</div>
            )}
          </div>

          {filteredTransactions.length > 0 && (
            <div className="flex justify-center mt-4">
              <button className="text-[#00ff9d]">
                <ArrowDown size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Support button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-[#00ff9d] text-black p-4 rounded-full flex items-center justify-center">
            <CreditCard size={24} />
            <span className="ml-2">Support</span>
          </button>
        </div>
    </Layout>
  )
}

function NavItem({ icon, label, isActive, onClick }:any) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center text-xs gap-1 p-2 w-full ${
        isActive ? "text-[#00ff9d] bg-[#00ff9d20]" : "text-gray-400 hover:text-gray-200"
      }`}
    >
      <div className={`p-2 rounded-lg ${isActive ? "bg-[#00ff9d20]" : ""}`}>{icon}</div>
      <span>{label}</span>
    </button>
  )
}

function CryptoIcon({ type, small = false }: any) {
  const bgColor =
    type === "Bitcoin" || type === "Dogecoin" || type === "Litecoin" || type === "Tether"
      ? "bg-[#FFA500]"
      : "bg-[#3c3c3c]"

  const size = small ? "w-5 h-5" : "w-8 h-8"
  const fontSize = small ? "text-xs" : "text-base"

  return (
    <div className={`${size} rounded-full flex items-center justify-center ${bgColor}`}>
      {type === "Bitcoin" && <span className={`text-white font-bold ${fontSize}`}>₿</span>}
      {type === "Ethereum" && <span className={`text-[#00ff9d] font-bold ${fontSize}`}>Ξ</span>}
      {type === "Litecoin" && <span className={`text-white font-bold ${fontSize}`}>Ł</span>}
      {type === "Dogecoin" && <span className={`text-white font-bold ${fontSize}`}>Ð</span>}
      {type === "Tether" && <span className={`text-white font-bold ${fontSize}`}>₮</span>}
    </div>
  )
}
