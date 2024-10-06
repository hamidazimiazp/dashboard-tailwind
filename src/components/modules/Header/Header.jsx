import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import SearchInput from "../../shared/SearchInput/SearchInput";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center">
      <div>
        <SearchInput />
      </div>
      <div className="flex gap-2 items-center mr-2">
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black">
            <HiOutlineChatAlt fontSize={24} />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom end"
            className="divide-y text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="w-80 bg-white px-3 py-2.5 rounded ring-1 ring-black ring-opacity-5">
              <strong className="text-gray-700 font-medium">Messages</strong>
              <div className="mt-2 py-1 text-sm">Messages Panel</div>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black">
            <HiOutlineBell fontSize={24} />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom end"
            className="divide-y text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="w-80 bg-white px-3 py-2.5 rounded ring-1 ring-black ring-opacity-5">
              <strong className="text-gray-700 font-medium">
                Notification
              </strong>
              <div className="mt-2 py-1 text-sm">Notification Panel</div>
            </div>
          </PopoverPanel>
        </Popover>
        <Menu>
          <MenuButton className="w-10 h-10 rounded-full bg-gray-800 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700 focus:bg-gray-700">
            <img
              src="./avatar.jpg"
              alt="avatar"
              className="w-full h-full object-cover rounded-3xl"
            />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-black/5 bg-white p-1 text-sm/6 text-black transition duration-100 ease-out focus:outline-none"
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-50">
                Your Profile
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-50">
                Settings
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-50">
                Sign Out
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
