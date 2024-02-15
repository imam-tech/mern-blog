import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { signOutSuccess } from '../redux/user/userSlice';

export default function DashboardSidebar() {
    const location = useLocation();
    const [tab, setTab] = useState("");
    const dispatch = useDispatch();
  
    useEffect(() => {
      const urlParams  = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get("tab")
      if (tabFromUrl) setTab(tabFromUrl)
    }, [location.search]);

    const handleSignout = async () => {
        try {
            const res = await fetch('/api/user/sign-out', {
                method: 'POST'
            })
            await res.json();
            if (!res.ok) {
                console.log("first")
            } else {
                dispatch(signOutSuccess())
            }
        } catch (error) {
            console.log("first")
        }
    }

  return (
    <Sidebar className="w-full">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to={'/dashboard?tab=profile'}>
                    <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={"User"} labelColor="dark" as="div">
                        Profile
                    </Sidebar.Item>
                </Link>
                <Sidebar.Item onClick={handleSignout} icon={HiArrowSmRight} className="cursor-pointer">
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
