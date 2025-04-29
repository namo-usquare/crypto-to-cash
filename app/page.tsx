"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Instagram, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { StepCard } from "@/components/StepCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FaqItem } from "@/components/FaqItem";
import { ShoppingCartAnimation } from "@/components/ShoppingCartAnimation";
import { BackgroundPattern } from "@/components/BackgroundPattern";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0c0c10] text-white overflow-hidden">
        <BackgroundPattern />

        {/* Hero Section */}
        <section 
          className="relative z-10 h-screen flex items-center justify-center pt-20 md:pt-0"
        >
          <div className="w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center text-center max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Cash Delivered for Your Crypto
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                Anytime, Anywhere in Dubai
              </p>
              <div>
                <Button className="bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-4 sm:px-8 sm:py-6 rounded-full text-base sm:text-lg">
                  CONVERT CRYPTO NOW
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <div className="bg-green-400/20 p-1 rounded-full">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  </div>
                  <span className="text-sm sm:text-base">Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-400/20 p-1 rounded-full">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  </div>
                  <span className="text-sm sm:text-base">Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-400/20 p-1 rounded-full">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  </div>
                  <span className="text-sm sm:text-base">Private</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <ShoppingCartAnimation />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 bg-gray-50 text-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              How it works
              <span className="block w-16 h-1 bg-green-400 mx-auto mt-2"></span>
            </h2>

            <div className="flex justify-between flex-col gap-16">
              <div className="flex flex-row items-center justify-between text-center mb-12">
                <StepCard number={1} title="Send Crypto" />
                <StepCard number={2} title="Track Delivery" />
              </div>
              <StepCard number={3} title="Receive Cash" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-[#0c0c10]">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className="bg-[#1a1a24] rounded-2xl p-8 md:p-12"
              style={{
                boxShadow: '-36.69px 36.69px 36.69px 0px #FFFFFF21 inset, 36.69px -36.69px 36.69px 0px #C2C2C221 inset',
                backdropFilter: 'blur(78.5074234008789px)',
              }}
            >
              <h2 className="text-3xl text-green-400 font-bold text-center mb-12">
                What our clients say
                <span className="block w-16 h-1 bg-green-400 mx-auto mt-2"></span>
              </h2>

              <TestimonialCarousel
                testimonials={[
                  {
                    stars: 5,
                    text: "From BTC to cash in under 2 hours. The courier was professional and discreet. Will definitely use again.",
                    name: "Justin Morris",
                    location: "Business Bay, Dubai"
                  },
                  {
                    stars: 5,
                    text: "When my card stopped working abroad, they saved my trip. Converted ETH to cash while I was having lunch.",
                    name: "Thomas K.",
                    location: "Downtown Dubai"
                  },
                  {
                    stars: 5,
                    text: "Excellent rates and incredible tracking feature gave me lot of mind.",
                    name: "Sarah L.",
                    location: "Business Bay"
                  },
                  {
                    stars: 5,
                    text: "Excellent rates and incredible tracking feature gave me lot of mind.",
                    name: "Sarah L.",
                    location: "Business Bay"
                  },
                  {
                    stars: 5,
                    text: "Excellent rates and incredible tracking feature gave me lot of mind.",
                    name: "Sarah L.",
                    location: "Business Bay"
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-[#0c0c10]"
        style={{
          backgroundImage: "url('/images/grid.png')",
          backgroundSize: "contain",
          backgroundPosition: "-10% 50%",
          backgroundRepeat: "no-repeat",
        }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
              <span className="block w-40 h-1 bg-green-400 mx-auto mt-4"></span>
            </h2>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <FaqItem
                  value="item-1"
                  question="Which cryptocurrencies do you accept?"
                  answer="We accept Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC), Binance Coin (BNB), and several other major cryptocurrencies. Contact us for a full list of supported currencies."
                />
                <FaqItem
                  value="item-2"
                  question="How long does delivery take?"
                  answer="After confirming your transaction, cash delivery typically takes 1-3 hours depending on your location in Dubai. Express delivery is available for urgent needs."
                />
                <FaqItem
                  value="item-3"
                  question="Is the service available 24/7?"
                  answer="Yes, our crypto-to-cash service operates 24 hours a day, 7 days a week, including holidays."
                />
                <FaqItem
                  value="item-4"
                  question="What are your fees?"
                  answer="Our fees range from 1-3% depending on the cryptocurrency, amount, and delivery timeframe. We offer competitive exchange rates that include our service fee."
                />
                <FaqItem
                  value="item-5"
                  question="How is my privacy protected?"
                  answer="We use end-to-end encryption for all communications. Our couriers are trained for discretion and don't carry any information about the source of funds or transaction details."
                />
              </Accordion>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-[#f5f5f5] text-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className=" hover:text-green-400 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#how-it-works"
                      className="hover:text-green-400 transition-colors"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#testimonials"
                      className="hover:text-green-400 transition-colors"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#faqs"
                      className="hover:text-green-400 transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Terms of Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <Instagram size={16} />
                      <span>Instagram</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <Mail size={16} />
                      <span>Email</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <Image
                    src="/images/cryptocurrency.png"
                    alt="Mobile App"
                    width={300}
                    height={300}
                    className="mx-auto md:ml-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
