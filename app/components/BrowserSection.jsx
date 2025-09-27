import OneBrowser from "./browsers/OneBrowser"

export default function BrowserSection() {
  const browsers = [
    { browser: "chrome", version: "62", margin: "mt-0" },
    { browser: "firefox", version: "55", margin: "mt-10" },
    { browser: "opera", version: "46", margin: "mt-20" }
  ]

  return (
    <section className="lg:w-2/3 w-3/4 mx-auto my-20">
      <h2 className="lg:w-1/2 mx-auto text-4xl text-center mb-4">Download the extension</h2>
      <p className="lg:w-1/2 mx-auto text-center text-gray-600 mb-12">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.
      </p>

      <div className="flex flex-col lg:flex-row justify-center lg:items-start gap-8">
        {browsers.map((browser, idx) => (
          <OneBrowser 
            key={idx} 
            margin={browser.margin} 
            browser={browser.browser} 
            version={browser.version}
          />
        ))}
      </div>
    </section>
  )
}
