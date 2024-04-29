import { useState } from "react";
import Preview from "./Preview";

function App() {
  const images = [
    {
      link: "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc",
    },
    {
      link: "https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9",
    },
    {
      link: "https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w",
    },
    {
      link: "https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc",
    },
  ];

  const[preview , setPreview] = useState(null)
  const openPreview = (url) => {
    setPreview(url)
  }

    return (
    <>
      <div className="w-[100%]">
        <h1 className="text-2xl font-bold text-center py-10">Image Gallery</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <a href="#">Click on an image!</a>
        <div className="flex justify-center items-center gap-6 mt-8">
          {images.map((item, idx) => {
            return (
              <img
                src={item.link}
                key={idx}
                alt="one"
                className="w-52 h-60 rounded-lg shadow-2xl object-cover transfrom hover:scale-110 duration-200 ease-in-out"
                onClick={() => openPreview(item.link)}
              />
            );
          })}
        </div>
      </div>

      {preview &&  <Preview card={preview} title={"Selected image"}/>}
    </>
  );
}

export default App;
