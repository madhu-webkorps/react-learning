<form onSubmit={handleSubmit}>
  <input
    name="fname"
    type="text"
    placeholder="Enter your first name"
    onChange={inputEvent}
  // value={fullname.fname}
  /> <br /> <br />
  <input
    name="lname"
    type="text"
    placeholder="Enter your last name"
    onChange={inputEvent}
  // value={fullname.fname}
  /> <br /> <br />
  <input
    name="phone"
    type="phone"
    placeholder="Enter your phone"
    onChange={inputEvent}
  // value={fullname.fname}
  /> <br /> <br />
  <input
    name="email"
    type="email"
    placeholder="Enter your email"
    onChange={inputEvent}
  // value={fullname.fname}
  /> <br /> <br />
  <button type="submit">Submit</button>
</form>