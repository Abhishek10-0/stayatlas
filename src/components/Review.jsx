<div className="mt-20 px-4 sm:px-10 lg:px-20">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
    What Our Guests Say
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "Aarav Sharma",
        comment: "The villa was absolutely stunning and the staff were very friendly. Perfect for a weekend getaway!",
        rating: 5,
      },
      {
        name: "Diya Mehta",
        comment: "Amazing view, peaceful environment, and super clean rooms. Will definitely book again!",
        rating: 4.5,
      },
      {
        name: "Rohan Verma",
        comment: "Spacious and luxurious. The pool was a highlight for our family. Highly recommend.",
        rating: 4.8,
      },
    ].map((review, index) => (
      <div key={index} className="bg-white p-6 rounded-2xl border shadow-md hover:shadow-lg transition">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-md font-semibold text-gray-800">{review.name}</h4>
          <div className="flex items-center">
            <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-700">{review.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">{review.comment}</p>
      </div>
    ))}
  </div>
</div>