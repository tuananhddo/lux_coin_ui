import React from 'react';
import * as S from './style';
// import {  ArrowDropDown } from "@material-ui/icons";

import menu from 'config/constants/menu';
import {ClickAwayListener, MenuItem, MenuList} from "@mui/material";
import {ArrowDropDown} from "@mui/icons-material";



function Sidebar(): React.ReactElement {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [open, setOpen] = React.useState(false);
    const [offsetLeft] = React.useState(0);
    const anchorRef: any = React.useRef(null);

 

    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current?.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event: any) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const handleClickItem = (event: any, location?: any, data?: any) => {
        event.stopPropagation();
        // history.push(location, { data })

    }
    return (<S.WrapperSideBar>
        {
            menu.map((el: any, index) => {
                return <>
                    <S.LinkSideBar
                        href={el.link? `${el.link}` : '#'}
                        // onClick={() => handleToggle(el)}
                        ref={anchorRef}
                        // ref={el => {
                        //     // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
                        //     if (!el) return;
                        //     const left = el.getBoundingClientRect().left
                        //     setOffsetLeft(left)
                        //     console.log(el.getBoundingClientRect()); // prints 200px
                        // }}
                        aria-controls={'menu-list-grow'}
                        underline="none"
                        color="initial"
                        key={`wrap-side-bar-${index}`}
                    >
                        {el?.item?.length > 0 && <S.ListItem className="list-item" style={{ left: offsetLeft }}>
                            <ClickAwayListener onClickAway={handleClose}

                            >
                                <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {
                                        el?.item?.map((v: any, i: any) => {
                                            return <MenuItem
                                                onClick={(e) => handleClickItem(e, el.link, v)}
                                                key={`menu-list-item-${i}`}>{v?.label ?? ''}</MenuItem>
                                        })
                                    }
                                </MenuList>
                            </ClickAwayListener>
                        </S.ListItem>}

                        {
                            // el.item? el.item.map((item, i)=>{
                            //     return 
                            // })
                        }
                        <div className="title">
                            {el?.label}
                            {el?.item?.length > 0 && <ArrowDropDown />}
                        </div>

                    </S.LinkSideBar >
                    {/* {el?.item?.length > 0 && <S.ListItem className="list-item" style={{left: offsetLeft}}>
                        <ClickAwayListener onClickAway={handleClose}

                        >
                            <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                {
                                    el?.item?.map((v: any, i: any) => {
                                        return <MenuItem
                                            onClick={(e) => handleClickItem(el.link, v)}
                                            key={i}>{v?.label ?? ''}</MenuItem>
                                    })
                                }
                            </MenuList>
                        </ClickAwayListener>
                    </S.ListItem>} */}
                    {/* <div
                        // href={el.link? el.link : '#'}
                        onClick={(e) => handleClick(e, el)}
                        ref={anchorRef}
                        // aria-controls={'menu-list-grow'}
                        // underline="none"
                        // color="initial"
                        key={index}
                    >


                        {
                            // el.item? el.item.map((item, i)=>{
                            //     return 
                            // })
                        }
                        <div className="title">
                            {el?.label}
                            {el?.item?.length > 0 && <ArrowDropDown />}
                        </div>

                    </div >
                    {el?.item?.length > 0 && <div className="list-item">

                        {
                            el?.item?.map((v: any, i: any) => {
                                return <div
                                    onClick={(e: any) => handleClickItem(e, v)}
                                    key={i}>{v?.label ?? ''}</div>
                            })
                        }
                    </div>} */}
                </>
            }
            )
        }
    </S.WrapperSideBar>)
}

export default Sidebar;
