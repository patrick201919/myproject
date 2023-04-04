import React from "react";
import "./time.module.css";

const Time = () => {
  return (
    <div className="timeContainer">
      <label htmlFor="time">HEURE</label>
      <select name="time" id="time">
        <option value="0">11:30</option>
        <option value="0">00:00</option>
        <option value="1">00:30</option>
        <option value="2">01:00</option>
        <option value="3">01:30</option>
        <option value="4">02:00</option>
        <option value="5">02:30</option>
        <option value="6">03:00</option>
        <option value="7">03:30</option>
        <option value="8">04:00</option>
        <option value="9">04:30</option>
        <option value="10">05:00</option>
        <option value="11">05:30</option>
        <option value="12">06:00</option>
        <option value="13">06:30</option>
        <option value="14">07:00</option>
        <option value="15">07:30</option>
        <option value="16">08:00</option>
        <option value="17">08:30</option>
        <option value="18">09:00</option>
        <option value="19">09:30</option>
        <option value="20">10:00</option>
        <option value="21">10:30</option>
        <option value="22">11:00</option>
        <option value="23">11:30</option>
        <option value="24">12:00</option>
        <option value="25">12:30</option>
        <option value="26">13:00</option>
        <option value="27">13:30</option>
        <option value="28">14:00</option>
        <option value="29">14:30</option>
        <option value="30">15:00</option>
        <option value="31">15:30</option>
        <option value="32">16:00</option>
        <option value="33">16:30</option>
        <option value="34">17:00</option>
        <option value="35">17:30</option>
        <option value="36">18:00</option>
        <option value="37">18:30</option>
        <option value="38">19:00</option>
        <option value="39">19:30</option>
        <option value="40">20:00</option>
        <option value="41">20:30</option>
        <option value="42">21:00</option>
        <option value="43">21:30</option>
        <option value="44">22:00</option>
        <option value="45">22:30</option>
        <option value="46">23:00</option>
        <option value="47">23:30</option>
      </select>
    </div>
  );
};

export default Time;
