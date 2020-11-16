import React from 'react';
import { ArrowRightCircle } from 'react-feather';

const Cross = () => (
  <div className="cross">
    <div className="buttons">
      <div className="filler" />
      <button type="button" className="cro up" />
      <div className="filler" />
      <button type="button" className="cro left" />
      <div className="filler middle" />
      <button type="button" className="cro right" />
      <div className="filler" />
      <button type="button" className="cro down" />
      <div className="filler" />
    </div>
  </div>
);

export default Cross;
