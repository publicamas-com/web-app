"use client";
import {AppLayoutContainer} from "@/components";
import React, {ReactNode, useEffect} from "react";
import {useSession} from "next-auth/react";

const AppLayout = ({children}: Readonly<{ children: ReactNode }>) => {
    const {data: session} = useSession();

    useEffect(() => {
        if (session?.accessToken) {
            localStorage.setItem('accessToken', session.accessToken);
        }
    }, [session]);

    return (
      <AppLayoutContainer>
          {children}
      </AppLayoutContainer>
    );
};

export default AppLayout;