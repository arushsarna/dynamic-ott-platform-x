import React, { useEffect, useState } from "react";
import * as cookie from "cookie";

import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Sidebar from "../../components/Sidebar";
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  console.log(parsedCookies.JWT);
  const auth = await fetch(
    `${process.env.HOST}/api/authAdmin?cookies=` + parsedCookies.JWT
  ).then((t) => t.json());

  if (auth.data == false) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Upload() {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const [type, setType] = useState("Movie");
  const [title, setTitle] = useState();
  const [genere, setGenere] = useState();

  const [tag, setTag] = useState([]);
  const [currtag, setcurrTag] = useState("");
  const [poster, setPoster] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [description, setDescription] = useState();
  const [trailerLink, setTrailerLink] = useState();
  const [episode, setEpisode] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [form, setForm] = useState(true);
  function removeTag(i) {}
  console.log(tag);
  const handleChange = (event) => {
    setType(event.target.value);
  };
  async function submitForm() {
    const res = await fetch("/api/addcontent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        genere,
        description,
        trailerLink,
        tag,
        type,
        poster,
      }),
    }).then((t) => t.json());

    setForm(false);
  }
  return (
    <div className="flex bg-[#135CC5] h-screen text-white">
      <Sidebar />
      <div className="container mx-auto px-4 h-full mb-20 ">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white rounded-lg text-black">
                {!form && (
                  <div>
                    <div className=" mt-4">Form is Submitted!</div>
                    <button
                      onClick={() => {
                        setForm(true);
                      }}
                      className=" mt-3  px-5 py-2  bg-blue-700 text-white rounded-2xl"
                    >
                      Submit New Episode/Movie
                    </button>
                  </div>
                )}

                {form && (
                  <form>
                    <div className="relative w-full mb-3 mt-10">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Title
                      </label>
                      <input
                        value={title}
                        onChange={() => {
                          setTitle(event.target.value);
                        }}
                        type="title"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Tittle"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Trailer Link
                      </label>
                      <input
                        value={trailerLink}
                        onChange={(event) => {
                          setTrailerLink(event.target.value);
                        }}
                        type="trailerLink"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Trailer Link"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Poster Link
                      </label>
                      <input
                        value={poster}
                        onChange={(event) => {
                          setPoster(event.target.value);
                        }}
                        type="poster"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Poster Link"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Tags
                      </label>
                      <input
                        value={currtag}
                        onChange={(event) => {
                          setcurrTag(event.target.value);
                        }}
                        type="currtag"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Tags"
                      />
                      <div className="flex">
                        <button
                          className="text-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            if (currtag.length > 0) {
                              setTag([...tag, currtag]);
                              setcurrTag("");
                            }
                          }}
                        >
                          Add Tag
                        </button>
                        <div> :-</div>
                        {tag.map((i) => (
                          <div
                            key={i.toSting()}
                            className="flex items-center   "
                          >
                            <div className="px-2">{i}</div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                const newTodos = [...tag];
                                newTodos.splice(i, 1);
                                setTag(newTodos);
                              }}
                              className="  text-red-500 pl-1  rounded-full "
                            >
                              x
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Genere
                      </label>
                      <input
                        value={genere}
                        onChange={() => {
                          setGenere(event.target.value);
                        }}
                        type="Genere"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Genere"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Thumbnail Link
                      </label>
                      <input
                        value={thumbnail}
                        onChange={() => {
                          setThumbnail(event.target.value);
                        }}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Thumbnail Link"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Description
                      </label>
                      <textarea
                        value={description}
                        onChange={() => {
                          setDescription(event.target.value);
                        }}
                        type=" Description"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=" Description"
                      />
                    </div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Age</InputLabel>

                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={type}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem
                          onClick={() => {
                            setEpisode(false);
                          }}
                          value={"Movie"}
                        >
                          Movie
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            setEpisode(true);
                          }}
                          value={"Webseries"}
                        >
                          Webseries
                        </MenuItem>
                      </Select>
                    </FormControl>
                    {episode && (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Episode No.
                        </label>
                        <input
                          type="number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Episode No."
                        />
                      </div>
                    )}
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          onClick={() => {
                            setPrivacy(!privacy);
                          }}
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          I agree with the{" "}
                          <a href="#pablo" className="text-lightBlue-500">
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        onClick={submitForm}
                        disabled={!privacy}
                        className=" disabled:bg-gray-300 bg-blue-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Add the {type}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
