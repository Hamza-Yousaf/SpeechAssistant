import { Mic, Upload } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="w-1/2">
        <div className="bg-white p-8 rounded-lg text-center">
          <h1 className="text-[#14213d] text-4xl font-bold mb-2">
            Speech Analysis
          </h1>
          <h3 className="text-[#fca311] text-xl font-bold">
            Get detailed feedback
          </h3>
        </div>

        <div className="bg-white p-8 rounded-lg mt-8">
          <h1 className="text-xl mb-2">Your speech</h1>
          <div className="bg-gray-200 w-full h-1"></div>
          <div className="grid grid-cols-2">
            <div className="bg-[#14213d] w-72 h-72 mt-4 flex flex-col items-center justify-center mx-auto rounded-lg gap-2">
              <Mic className="w-24 h-24 text-[#fca311]" />
              <h1 className="text-white font-semibold">Record Now</h1>
            </div>

            <div className="bg-[#3a86ff] w-72 h-72 mt-4 flex flex-col items-center justify-center mx-auto rounded-lg gap-2">
              <Upload className="w-24 h-24 text-[#fca311]" />
              <h1 className="text-white font-semibold">Upload File</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
