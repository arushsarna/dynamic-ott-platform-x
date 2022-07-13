import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-60 pt-12 border-2 p-8 space-y-6  text-white">
      <Link href="/admin/link">
        <div className="hover:cursor-pointer">Add StreamLinks</div>
      </Link>
      <Link href="/admin/upload">
        <div className="hover:cursor-pointer">Upload New Content</div>
      </Link>
      <Link href="/admin/register">
        <div className="hover:cursor-pointer">Register New Admin</div>
      </Link>
      <Link href="/admin/monitor">
        <div className="hover:cursor-pointer">Monitor Data</div>
      </Link>
      <Link href="/admin/analytics">
        <div className="hover:cursor-pointer">Analytics</div>
      </Link>
      <Link href="/admin/fetchCustomData">
        <div className="hover:cursor-pointer">fetchCustomData</div>
      </Link>
    </div>
  );
}
