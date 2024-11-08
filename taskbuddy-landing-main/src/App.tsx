import {
  ChevronRight,
  Clock,
  DollarSign,
  ShieldCheck,
  BookOpen,
  HomeIcon,
  Coffee,
  ShoppingCart,
} from "lucide-react";
import toast from "react-hot-toast";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                TaskBuddy
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#students" className="text-gray-600 hover:text-blue-600">
                For Students
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => toast.loading("coming soon...")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fast Tasks, Easy Cash
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Enhance your college experience by saving time and earning money
            with the most trusted task-sharing platform for college students
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 inline-flex items-center"
            onClick={() => toast.loading("coming soon...")}
          >
            Start Now - First Task Free
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose TaskBuddy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">
                Batch requests together to complete faster and cheaper than
                doing them independently
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
              <p className="text-gray-600">
                Flexible earning opportunities that fit your schedule
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Campus Safety</h3>
              <p className="text-gray-600">
                Verified student network with admin supervision
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* For Students Section */}
      <div id="students" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Made for Student Life</h2>
              <div className="space-y-4">
                <div className="flex flex-row justify-between">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">For Busy Students</h3>
                    <p className="text-gray-600">
                      Focus on your studies while others handle your errands
                    </p>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        For Task Completers
                      </h3>
                      <p className="text-gray-600">
                        Earn money between classes by helping fellow students
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-row items-center">
                    <HomeIcon className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Going Home?</h3>
                      <p className="text-gray-600">
                        Split travel costs by coordinating rides with fellow
                        students heading the same way
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <Coffee className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Want Starbucks?</h3>
                      <p className="text-gray-600">
                        Get it delivered to your dorm/building without leaving
                        where you are
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <ShoppingCart className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Run to Target?</h3>
                      <p className="text-gray-600">
                        Join a group of students already going so you don't have
                        to walk there alone
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <ShoppingCart className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Anything Else?</h3>
                      <p className="text-gray-600">
                        Post any other requests and see if anyone can help
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-5">
              <img
                src="/Earn.png"
                alt="TaskBuddy App Interface"
                className="rounded-3xl shadow-2xl h-[800px]"
              />
              <img
                src="/Order.png"
                alt="TaskBuddy App Interface"
                className="rounded-3xl shadow-2xl h-[800px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Free Plan
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600">/forever</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span>One free task</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Basic task matching</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Basic tracking</span>
                  </li>
                </ul>
                <button
                  className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200"
                  onClick={() => toast.loading("coming soon...")}
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Premium Plan
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">$2.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span>AI-powered task matching</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Live tracking and updates</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                  onClick={() => toast.loading("coming soon...")}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
