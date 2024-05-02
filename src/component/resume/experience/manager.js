import React from 'react';

export default function Manager() {

const manager = [
    "Create and manage new and existing pages for the site in Endeca, Contentful and WCS",
    "Triage technical issues related to the content management systems both for the team and upon request from outside departments",
    "Prepare programs in BCC for the team to work on (products, programs, entitlements, etc)",
    "Prep and execute all launches to production",
    "Provide training and support to Merchandising Team members",
    "Manage technical aspects of Merchandising Team"];

const merchManagerItems = manager.map((manager) =>
    <li key={manager.toString()} className="detailList">{manager}</li>
);

return (
    <ul className="resumeItems">{merchManagerItems}</ul>
)}