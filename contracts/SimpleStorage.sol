// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public payable {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}