import { useState } from "react";
import Button from "./components/button/Button";
import Dropdown from "./components/dropdown/Dropdown";
import EmptyState from "./components/emptyState/EmptyState";
import CollapsiblePanel from "./components/collapsePanel/CollapsiblePanel";
import TabbedComponent from "./components/tabbedComponent/TabbedComponent";
import Notification from "./components/notification/Notification";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import Drawer from "./components/drawer/Drawer";
import Modal from "./components/modal/Modal";
import Form from "./components/form/Form";

// Define types for MenuItem, Notification, and Tab
type MenuItem = {
  label: string;
  onClick: () => void;
};

type NotificationType = "success" | "error" | "warning";

type NotificationState = {
  message: string;
  type: NotificationType;
} | null;

type Tab = {
  key: string;
  label: string;
  content: string;
};

const App = () => {
  // Button Click
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Dropdown items
  const menuItems: MenuItem[] = [
    { label: "Profile", onClick: () => alert("Profile clicked") },
    { label: "Settings", onClick: () => alert("Settings clicked") },
    { label: "Logout", onClick: () => alert("Logout clicked") },
  ];

  // CollapsiblePanel sections
  const sections = [
    {
      id: 1,
      title: "Introduction",
      content:
        "This is the introduction section. It provides a brief overview of the content.",
      defaultOpen: true, // This section will be open by default
    },
    {
      id: 2,
      title: "Features",
      content:
        "Here are the key features of the product. They include flexibility, scalability, and ease of use.",
      defaultOpen: false, // This section will be closed by default
    },
    {
      id: 3,
      title: "Pricing",
      content:
        "Our pricing is designed to be affordable and flexible. Contact us for more details.",
      defaultOpen: false,
    },
    {
      id: 4,
      title: "FAQ",
      content:
        "Find answers to the most commonly asked questions in this section.",
      defaultOpen: false,
    },
  ];

  // TabbedComponent tabs
  const tabs: Tab[] = [
    {
      key: "tab1",
      label: "Tab 1",
      content: "This is the content for Tab 1.",
    },
    {
      key: "tab2",
      label: "Tab 2",
      content: "This is the content for Tab 2.",
    },
    {
      key: "tab3",
      label: "Tab 3",
      content: "This is the content for Tab 3.",
    },
  ];

  // Notification state
  const [notification, setNotification] = useState<NotificationState>(null);

  // Function to show notifications
  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Drawer visibility state
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Modal visibility state
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    alert("Confirmed!");
    closeModal();
  };

  const handleCancel = () => {
    alert("Cancelled!");
    closeModal();
  };

  return (
    <>
      <div className="button">
        <h2 className="text-2xl font-bold mb-4">Button</h2>
        <Button type="button" size="px-6 py-3" onClick={handleClick} />
      </div>

      <div className="dropdown">
        <h2 className="text-2xl font-bold mb-4">Dropdown</h2>
        <Dropdown menuItems={menuItems} />
      </div>

      <div className="emptyState">
        <h2 className="text-2xl font-bold mb-4">Empty state</h2>
        <EmptyState
          message="No items available"
          imageUrl="https://via.placeholder.com/150"
        />
      </div>

      <div className="collapsiblePanel">
        <h2 className="text-2xl font-bold mb-4">Collapsible Panel</h2>
        <CollapsiblePanel sections={sections} />
      </div>

      <div className="tabbedComponent">
        <h2 className="text-2xl font-bold mb-4">Tabbed Component</h2>
        <TabbedComponent tabs={tabs} activeKey="tab1" />
      </div>

      <div className="notification">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">
            Notification Component Example
          </h1>
          <div className="space-x-4">
            <button
              onClick={() =>
                showNotification("Operation successful!", "success")
              }
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Show Success
            </button>
            <button
              onClick={() => showNotification("Something went wrong.", "error")}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Show Error
            </button>
            <button
              onClick={() =>
                showNotification("Please check your input.", "warning")
              }
              className="px-4 py-2 bg-yellow-500 text-white rounded-md"
            >
              Show Warning
            </button>
          </div>

          {/* Render Notification */}
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
            />
          )}
        </div>
      </div>

      <div className="loading-spinner">
        <h2 className="text-2xl font-bold mb-4">Loading Spinner</h2>
        <LoadingSpinner />
      </div>

      <div className="drawer">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Drawer Component Example</h1>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Open Drawer
          </button>

          {/* Drawer Component */}
          <Drawer
            isVisible={isDrawerOpen}
            width="w-72" // Customizable width
            onClose={() => setIsDrawerOpen(false)}
          >
            <h2 className="text-lg font-bold mb-4">Drawer Content</h2>
            <p>
              This is a customizable drawer for side menus or other content.
            </p>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Close Drawer
            </button>
          </Drawer>
        </div>
      </div>

      <div className="modal">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Reusable Modal Example</h1>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Open Modal
          </button>

          {/* Modal Component */}
          <Modal
            isVisible={isModalVisible}
            title="Are you sure?"
            content="Do you really want to perform this action?"
            onClose={closeModal}
            actions={[
              { label: "Cancel", type: "cancel", onClick: handleCancel },
              { label: "Confirm", type: "confirm", onClick: handleConfirm },
            ]}
          />
        </div>
      </div>

      <div className="form">
        <h2 className="text-2xl font-bold mb-4">Form</h2>
        <Form />
      </div>
    </>
  );
};

export default App;