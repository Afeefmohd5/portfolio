

const Internship = () => {
  return (
    <div className="bg-slate-950 p-10">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-white">EDUCATION INFORMATION</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-400">Personal details and education.</p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Full name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">Mohammed Afeef Khaleed</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Application for</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">FullStackWebDeveloper</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Email address</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">afeefmohd68@gmail.com</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Salary expectation</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Internship</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
              <p className="text-white ">Internships:</p>
           <p>[Internship Position] completed</p>
           <p> [Asphoron khuwze], [Jayanagar]</p>
             </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Education</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
              <p className="text-white ">Graduation</p>
              <p>[Bachelor's/Master's Degree] Bachelor in Computer Application  </p>
              <p>[Univercity Name] Baldwine Methodist College</p>
              <p>[Location] MG Road Bangalore</p>
              <p>[Year - 2021-2024]</p>
              <p className="text-white ">Pre-Univercity</p>
              <p>[Univercity Name]RSD College</p>
              <p>[Location] Jayanagar Bangalore</p>
              <p className="text-white ">School</p>
              <p>[Univercity Name]Chirts Univercity school</p>
              <p>[Location] Jayanagar Bangalore</p>
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Attachments</dt>
            <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate text-white font-medium">resume_back_end_developer.pdf</span>
                      <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                  </div>
                </li>

              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>

  );
};

export default Internship;
