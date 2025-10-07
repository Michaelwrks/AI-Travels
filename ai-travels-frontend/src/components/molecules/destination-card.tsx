// import Image from "next/image";
import { useState } from "react";
import { Calendar, MapPin, Plane, Users } from "lucide-react";

// import { Button } from "@/components/atoms/button";
import { type VacationItemTypes } from "../../services/types";

interface DestinationCardProps {
	id?: string;
	image: string;
	title: string;
	country: string;
	city: string;
	rating: number;
	price: number;
	unit: string;
	description?: string | null;
}

export function DestinationCard() {
	const [selectedDate, setSelectedDate] = useState("2022-06-09");
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [selectedService, setSelectedService] = useState("flights");

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedDate(e.target.value);
		setShowDatePicker(false);
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("id-ID", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};
	console.log("Current selectedService:", selectedService);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b">
				<div className="max-w-6xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="bg-blue-600 p-2 rounded-lg">
								<Plane className="h-6 w-6 text-white" />
							</div>
							<h1 className="text-2xl font-bold text-gray-900">TravelAPI</h1>
						</div>
						<nav className="hidden md:flex space-x-8">
							<a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
								Flights
							</a>
							<a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
								Hotels
							</a>
							<a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
								Cars
							</a>
							<a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
								Support
							</a>
						</nav>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative py-16 px-6">
				<div className="max-w-6xl mx-auto text-center mb-12">
					<h2 className="text-5xl font-bold text-gray-900 mb-6">
						Find Your Perfect Flight
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Search and compare flights from hundreds of airlines worldwide. Book your
						next adventure with confidence.
					</p>
				</div>

				{/* Flight Search Container */}

				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
					<h2 className="text-center my-5 ">Where would you like to travel today?</h2>

						<div className="px-6 pt-6 pb-2 flex justify-center sm:justify-start ">

							<div className="flex space-x-1 bg-gray-100 rounded-lg p-1 w-full justify-between my-30 ">
								
								<div>
									<button
										onClick={() => setSelectedService("flights")}
										className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
											selectedService === "flights"
												? "bg-white text-blue-600 shadow-sm"
												: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
										}`}
									>
										Flights
									</button>
									<button
										onClick={() => setSelectedService("hotels")}
										className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
											selectedService === "hotels"
												? "bg-white text-blue-600 shadow-sm"
												: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
										}`}
									>
										Hotels
									</button>
								</div>
								<div className="searchForm flex">
									<form className="content-center w-96">
										<input className=" bg-gray-100 w-64" type="text" placeholder="Search for your dream location..." autoFocus />
									</form>
								</div>
							</div>
						</div>

						<div className="p-6 pt-4">
							<div className="md:flex items-center justify-between space-x-6">
								{/* Location Section */}

								<div className="flex-1 flex flex-col items-center text-center py-4">
									<div className="flex items-center space-x-3 text-blue-600">
										<MapPin className="h-5 w-5" />
										<span className="text-sm font-medium uppercase tracking-wide">
											Location
										</span>
									</div>
									<div className="text-lg font-semibold text-gray-900">NTB, Lombok</div>
									<div className="text-sm text-gray-500">Select the locations</div>
								</div>

								{/* Divider */}
								<div className="border-b lg:border-b-0 lg:border-l border-gray-200 h-16"></div>
								{/* Date Section */}
								<div className="flex-1 flex flex-col items-center text-center py-4">
									<div className="flex items-center space-x-3 text-blue-600">
										<Calendar className="h-5 w-5" />
										<span className="text-sm font-medium uppercase tracking-wide">
											Date
										</span>
									</div>
									<div className="flex-1">
										<div
											className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
											onClick={() => setShowDatePicker(!showDatePicker)}
										>
											{formatDate(selectedDate)}
										</div>
										<div className="text-sm text-gray-500">Choose Flight Date</div>

										{/* Date Picker */}
										{showDatePicker && (
											<div className="mt-3">
												<input
													type="date"
													value={selectedDate}
													onChange={handleDateChange}
													className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
												/>
											</div>
										)}
									</div>
								</div>

								{/* Divider */}
								<div className="border-b lg:border-b-0 lg:border-r border-gray-200 h-16"></div>

								{/* Flight Type Section */}
								<div className="flex-1 flex flex-col items-center text-center py-4">
									<div className="flex items-center space-x-3 text-blue-600">
										<Users className="h-5 w-5" />
										<span className="text-sm font-medium uppercase tracking-wide">
											Class
										</span>
									</div>
									<div className="flex-1">
										<div className="text-lg font-semibold text-gray-900">Economy</div>
										<div className="text-sm text-gray-500">Choose Flight type</div>
									</div>
								</div>

								{/* Divider */}
								<div className="border-b lg:border-b-0 lg:border-r border-gray-200 h-16"></div>

								{/* Search Button */}
								<div className="flex-shrink-0">
									<button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-200 focus:outline-none shadow-lg">
										Search {selectedService}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 px-6 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-gray-900 mb-4">
							Why Choose TravelAPI?
						</h3>
						<p className="text-gray-600">
							Experience seamless travel booking with our advanced features
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
							<div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
								<Plane className="h-6 w-6 text-blue-600" />
							</div>
							<h4 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h4>
							<p className="text-gray-600">
								Compare prices from hundreds of airlines to find the best deals for your
								journey.
							</p>
						</div>

						<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
							<div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
								<Calendar className="h-6 w-6 text-green-600" />
							</div>
							<h4 className="text-xl font-semibold text-gray-900 mb-2">
								Flexible Booking
							</h4>
							<p className="text-gray-600">
								Easy date changes and flexible booking options to suit your travel
								needs.
							</p>
						</div>

						<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
							<div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
								<MapPin className="h-6 w-6 text-purple-600" />
							</div>
							<h4 className="text-xl font-semibold text-gray-900 mb-2">
								Global Coverage
							</h4>
							<p className="text-gray-600">
								Access flights to destinations worldwide with our comprehensive network.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
